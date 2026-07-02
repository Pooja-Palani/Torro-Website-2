import React from 'react';

const MaintenancePage = () => {
    return (
        <div className="min-h-screen bg-[#181818] font-mono text-[#e5e5e5]">
            {/* Vite-style error overlay */}
            <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 pt-12 backdrop-blur-[2px]">
                <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-[#333] bg-[#1e1e1e] shadow-2xl">
                    {/* Red top bar */}
                    <div className="flex items-center gap-3 border-b border-[#ff4d4f]/30 bg-[#2a1215] px-4 py-3">
                        <span className="text-lg leading-none text-[#ff4d4f]">✕</span>
                        <span className="text-sm font-bold text-[#ff6b6b]">Build failed</span>
                    </div>

                    <div className="p-5">
                        <p className="text-sm text-[#ff6b6b]">
                            [plugin:vite:esbuild] Transform failed with 1 error:
                        </p>

                        <div className="mt-4 rounded border border-[#333] bg-[#111] p-4">
                            <p className="text-xs text-[#888]">
                                /src/pages/HomePage.jsx:14:28
                            </p>
                            <p className="mt-2 text-sm text-[#ff6b6b]">
                                ERROR: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
                            </p>

                            <pre className="mt-4 overflow-x-auto text-xs leading-6 text-[#ccc]">
{`  12 |   return (
  13 |     <div className="flex flex-col">
> 14 |       {sections.map((section) => (
     |                            ^
  15 |         <Section key={section.id} {...section} />
  16 |       )}
  17 |     </div>`}
                            </pre>
                        </div>

                        <div className="mt-5 space-y-1 text-xs text-[#666]">
                            <p>    at failureErrorWithLog (node_modules/esbuild/lib/main.js:1472:15)</p>
                            <p>    at node_modules/esbuild/lib/main.js:755:50</p>
                            <p>    at responseCallbacks.&lt;computed&gt; (node_modules/esbuild/lib/main.js:622:9)</p>
                            <p>    at handleIncomingPacket (node_modules/esbuild/lib/main.js:677:12)</p>
                            <p>    at Socket.readFromStdout (node_modules/esbuild/lib/main.js:600:7)</p>
                        </div>

                        <p className="mt-5 text-[11px] text-[#555]">
                            Click outside, press Esc key, or fix the code to dismiss.
                        </p>
                        <p className="mt-1 text-[11px] text-[#444]">
                            You can also disable this overlay by setting server.hmr.overlay to false in vite.config.js.
                        </p>
                    </div>
                </div>
            </div>

            {/* Dimmed broken app behind overlay */}
            <div className="pointer-events-none opacity-30">
                <header className="border-b border-[#333] bg-[#111] px-6 py-4">
                    <div className="mx-auto flex max-w-6xl items-center gap-3">
                        <div className="h-7 w-24 rounded bg-[#333]" />
                        <div className="ml-auto flex gap-4">
                            <div className="h-3 w-16 rounded bg-[#2a2a2a]" />
                            <div className="h-3 w-16 rounded bg-[#2a2a2a]" />
                        </div>
                    </div>
                </header>
                <div className="mx-auto max-w-6xl px-6 py-8">
                    <div className="mb-4 h-10 w-2/3 rounded bg-[#222]" />
                    <div className="mb-2 h-4 w-full rounded bg-[#1a1a1a]" />
                    <div className="h-4 w-4/5 rounded bg-[#1a1a1a]" />
                </div>
            </div>
        </div>
    );
};

export default MaintenancePage;
