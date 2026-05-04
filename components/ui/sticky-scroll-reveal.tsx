"use client";

import React, { useEffect, useRef, useState } from "react";

export interface StickyScrollContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface StickyScrollProps {
  content: StickyScrollContentItem[];
  contentClassName?: string;
}

export function StickyScroll({ content, contentClassName = "" }: StickyScrollProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!content.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActiveIndex(index);
        }
      },
      {
        // Use the scroll container as the root if available, otherwise the viewport.
        root: containerRef.current ?? null,
        // Shrink the observable area to the vertical center of the root so items
        // become "intersecting" as they enter the middle of the scroll area.
        rootMargin: "-50% 0px -50% 0px",
        // Use a single threshold so the first intersection into the center triggers.
        threshold: [0],
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [content.length]);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full gap-8 overflow-auto"
    >
      {/* Left: scrollable list */}
      <div className="w-[55%] min-w-0 shrink-0 pr-10 pt-[120px]">
        {content.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="min-h-[90vh] flex flex-col justify-start items-start max-w-[680px] py-10 opacity-25 transition-opacity duration-300 data-[active=true]:opacity-100"
            data-active={activeIndex === i}
          >
            <h3 className="text-[2.5rem] font-bold text-[#94A4F4] mb-5 leading-tight tracking-tight">
              {item.title}
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Right: sticky content */}
      <div
        className={`sticky top-[120px] w-[45%] h-[60vh] max-h-[600px] shrink-0 rounded-xl overflow-hidden bg-[#0d0d0d] ${contentClassName}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          {content[activeIndex]?.content}
        </div>
      </div>
    </div>
  );
}
