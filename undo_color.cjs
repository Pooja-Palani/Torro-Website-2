const fs = require('fs');

let content = fs.readFileSync('src/components/sections/Hero.jsx', 'utf8');

// Reverse platform colors
content = content.replace('bg-[#0f111a]', 'bg-[#0c0f22]');
content = content.replace('bg-[#050505]', 'bg-[#060813]');
content = content.replace('bg-[#101010]', 'bg-[#0a0d1c]');
content = content.replace('bg-[#0a0c0f]', 'bg-[#111633]');
content = content.replace('bg-primary/5', 'bg-[#3b82f6]/10');
content = content.replace('bg-gradient-to-r from-primary/10 to-accent/10 blur-[25px]', 'bg-[#6366f1]/20 blur-[25px]');
// The glowing separation line
content = content.replace('via-primary/50', 'via-[#8c9eff]/40');
// Disk base highlight line
content = content.replace('border-primary/10', 'border-[#8c9eff]/10');
content = content.replace('border-primary/20', 'border-[#8c9eff]/20');
content = content.replace('group-hover:text-accent', 'group-hover:text-white');

// SVG strokes
content = content.replace('stroke="currentColor" className="text-primary/40"', 'stroke="rgba(140,158,255,0.4)"');
content = content.replace('stroke="currentColor" className="text-accent/30"', 'stroke="rgba(140,158,255,0.3)"');
content = content.replace('stroke="currentColor" className="text-primary/20"', 'stroke="rgba(140,158,255,0.2)"');

// Basic replaces (Main BG is first bg-black, Platform curve is second bg-black)
content = content.replace('bg-black', 'bg-[#0c0e1a]');
content = content.replace('bg-black', 'bg-[#020308]');
content = content.replace('bg-primary/20', 'bg-blue-600/20');
content = content.replace('bg-accent/10', 'bg-indigo-600/20');
content = content.replace(/text-primary/g, 'text-[#a5b4fc]');
content = content.replace(/border-primary/g, 'border-[#8c9eff]');
content = content.replace(/bg-primary/g, 'bg-[#8c9eff]');
content = content.replace('hover:bg-primary/80', 'hover:bg-[#7b8dec]');

// Fix RGBA shadow colors
content = content.replace(/rgba\(148,164,244,/g, 'rgba(165,180,252,');

fs.writeFileSync('src/components/sections/Hero.jsx', content);

let header = fs.readFileSync('src/components/layout/Header.jsx', 'utf8');
header = header.replace('bg-black/60', 'bg-[#0b0c16]/40');
header = header.replace(/text-primary/g, 'text-[#a5b4fc]');
header = header.replace(/border-primary/g, 'border-[#8c9eff]');
header = header.replace(/bg-primary/g, 'bg-[#8c9eff]');
header = header.replace('hover:bg-primary/80', 'hover:bg-[#7b8dec]');
fs.writeFileSync('src/components/layout/Header.jsx', header);

console.log("Reversed replacements complete.");
