const fs = require('fs');

let content = fs.readFileSync('src/components/sections/Hero.jsx', 'utf8');
content = content.replace('bg-[#0c0e1a]', 'bg-black');
content = content.replace('bg-blue-600/20', 'bg-primary/20');
content = content.replace('bg-indigo-600/20', 'bg-accent/10');
content = content.replace(/text-\[\#a5b4fc\]/g, 'text-primary');
content = content.replace(/text-\[\#8c9eff\]/g, 'text-primary');
content = content.replace(/border-\[\#8c9eff\]/g, 'border-primary');
content = content.replace(/bg-\[\#8c9eff\]/g, 'bg-primary');
content = content.replace('hover:bg-[#7b8dec]', 'hover:bg-primary/80');

// SVG strokes
content = content.replace('stroke="rgba(140,158,255,0.4)"', 'stroke="currentColor" className="text-primary/40"');
content = content.replace('stroke="rgba(140,158,255,0.3)"', 'stroke="currentColor" className="text-accent/30"');
content = content.replace('stroke="rgba(140,158,255,0.2)"', 'stroke="currentColor" className="text-primary/20"');

// Fix RGBA shadow colors
content = content.replace(/rgba\(165,180,252,/g, 'rgba(148,164,244,');
content = content.replace(/rgba\(140,158,255,/g, 'rgba(148,164,244,');

// Platform colors deeper black and highlights
content = content.replace('bg-[#0c0f22]', 'bg-[#0f111a]');
content = content.replace('bg-[#060813]', 'bg-[#050505]');
content = content.replace('bg-[#0a0d1c]', 'bg-[#101010]');
content = content.replace('bg-[#111633]', 'bg-[#0a0c0f]');
content = content.replace('bg-[#3b82f6]/10', 'bg-primary/5');
content = content.replace('bg-[#020308]', 'bg-black');
content = content.replace('bg-[#6366f1]/20 blur-[25px]', 'bg-gradient-to-r from-primary/10 to-accent/10 blur-[25px]');
// The glowing separation line
content = content.replace('via-[#8c9eff]/40', 'via-primary/50');
// Disk base highlight line
content = content.replace('border-[#8c9eff]/10', 'border-primary/10');
content = content.replace('border-[#8c9eff]/20', 'border-primary/20');
content = content.replace('group-hover:text-white', 'group-hover:text-accent');

fs.writeFileSync('src/components/sections/Hero.jsx', content);

let header = fs.readFileSync('src/components/layout/Header.jsx', 'utf8');
header = header.replace('bg-[#0b0c16]/40', 'bg-black/60');
header = header.replace(/text-\[\#a5b4fc\]/g, 'text-primary');
header = header.replace(/text-\[\#8c9eff\]/g, 'text-primary');
header = header.replace(/border-\[\#8c9eff\]/g, 'border-primary');
header = header.replace(/bg-\[\#8c9eff\]/g, 'bg-primary');
header = header.replace('hover:bg-[#7b8dec]', 'hover:bg-primary/80');
fs.writeFileSync('src/components/layout/Header.jsx', header);

console.log("Replacements complete.");
