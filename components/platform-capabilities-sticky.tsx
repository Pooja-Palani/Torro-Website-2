"use client";

import React, { useRef, useState, useEffect } from "react";
import { StickyScroll, type StickyScrollContentItem } from "./ui/sticky-scroll-reveal";

const DEFAULT_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const PLATFORM_ITEMS: (Omit<StickyScrollContentItem, "content"> & { video?: string })[] = [
  {
    title: "Observe data",
    description:
      "Real-time monitoring and visibility across your data estate. Track data flows, detect anomalies, and maintain continuous oversight of data quality and usage.",
    video: DEFAULT_VIDEO,
  },
  {
    title: "Organize data",
    description:
      "Cataloging, metadata management, and structured classification. Build a searchable, governed data catalog that powers discovery and trust.",
    video: DEFAULT_VIDEO,
  },
  {
    title: "Govern data",
    description:
      "Policies, controls, and enforcement at scale. Define and automate data governance rules with policy-as-code and role-based access.",
    video: DEFAULT_VIDEO,
  },
  {
    title: "Govern AI use cases",
    description:
      "Collaborate around and manage AI use cases. Govern model inputs, outputs, and usage with built-in LLM governance and audit trails.",
    video: DEFAULT_VIDEO,
  },
  {
    title: "Monitor & improve",
    description:
      "Continuous oversight and optimization. Track KPIs, identify improvement opportunities, and evolve your data program with actionable insights.",
    video: DEFAULT_VIDEO,
  },
];

function VideoBlock({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [src]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0d0d0d] rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover opacity-0 transition-opacity duration-300 data-[loaded=true]:opacity-100"
        data-loaded={loaded}
        muted
        loop
        playsInline
        onLoadedData={() => setLoaded(true)}
      />
    </div>
  );
}

export function PlatformCapabilitiesSticky() {
  const content: StickyScrollContentItem[] = PLATFORM_ITEMS.map((item) => ({
    title: item.title,
    description: item.description,
    content: <VideoBlock src={item.video ?? DEFAULT_VIDEO} />,
  }));

  return (
    <section className="platform-wrapper w-full bg-black py-20 overflow-visible">
      <div className="platform-inner max-w-[1200px] mx-auto px-6">
        <header className="platform-header text-center max-w-3xl mx-auto mb-10">
          <p className="platform-label text-xs font-semibold tracking-[0.15em] uppercase text-[#94A4F4] mb-4">
            Platform capabilities
          </p>
          <h2 className="platform-title text-4xl font-bold text-white leading-tight tracking-tight mb-4">
            One platform for your entire data lifecycle
          </h2>
          <p className="platform-subtitle text-lg text-gray-400 leading-relaxed">
            From observation to optimization—govern, organize, and improve with a single source of truth.
          </p>
        </header>

        <div className="platform-section w-full relative overflow-auto">
          <StickyScroll content={content} contentClassName="platform-visual-sticky" />
        </div>
      </div>
    </section>
  );
}
