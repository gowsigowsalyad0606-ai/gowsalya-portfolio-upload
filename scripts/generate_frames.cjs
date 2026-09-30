const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, '../public/frames');
if (!fs.existsSync(framesDir)) {
  fs.mkdirSync(framesDir, { recursive: true });
}

const TOTAL_FRAMES = 16;
const W = 400;
const H = 480;

for (let i = 0; i < TOTAL_FRAMES; i++) {
  // Angle mapped from -PI to PI across 16 frames
  const angle = (i / TOTAL_FRAMES) * 2 * Math.PI - Math.PI;

  // Head shift
  const hx = 200 + Math.cos(angle) * 7;
  const hy = 220 + Math.sin(angle) * 7;

  // Eye pupil shift
  const eyeShiftX = Math.cos(angle) * 9;
  const eyeShiftY = Math.sin(angle) * 9;

  const leftEyeX = hx - 30;
  const rightEyeX = hx + 30;
  const eyeY = hy - 15;

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#222226"/>
      <stop offset="100%" stop-color="#111113"/>
    </linearGradient>
    <linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#333338"/>
      <stop offset="100%" stop-color="#1a1a1e"/>
    </linearGradient>
  </defs>

  <!-- 1. STATIONARY BODY & SHOULDERS -->
  <path d="M 60 480 C 72 345, 128 316, 200 316 C 272 316, 328 345, 340 480 Z" fill="url(#bgGrad)" stroke="rgba(200, 169, 126, 0.3)" stroke-width="1.5" />
  <path d="M 165 321 L 200 364 L 235 321" fill="none" stroke="rgba(200, 169, 126, 0.5)" stroke-width="2" />

  <!-- 2. NECK -->
  <rect x="176" y="260" width="48" height="72" fill="#1e1e22" />

  <!-- 3. HEAD (Shifted by directional angle frame) -->
  <rect x="${hx - 65}" y="${hy - 95}" width="130" height="170" rx="48" fill="url(#headGrad)" stroke="rgba(200, 169, 126, 0.4)" stroke-width="1.5" />
  
  <!-- Hair line -->
  <path d="M ${hx - 68} ${hy - 65} A 68 68 0 0 1 ${hx + 68} ${hy - 65} Z" fill="#161619" />

  <!-- Glasses frame hint -->
  <line x1="${hx - 60}" y1="${hy - 5}" x2="${hx + 60}" y2="${hy - 5}" stroke="rgba(200, 169, 126, 0.3)" stroke-width="1.5" />

  <!-- Nose hint -->
  <path d="M ${hx} ${hy + 10} L ${hx} ${hy + 35} L ${hx + 10} ${hy + 35}" fill="none" stroke="#666" stroke-width="2" />

  <!-- Mouth hint (neutral) -->
  <line x1="${hx - 15}" y1="${hy + 55}" x2="${hx + 15}" y2="${hy + 55}" stroke="#555" stroke-width="2.5" />

  <!-- 4. EYES & PUPILS (Offset for directional gaze) -->
  <circle cx="${leftEyeX}" cy="${eyeY}" r="13" fill="#e5e5e5" stroke="rgba(200, 169, 126, 0.5)" stroke-width="1" />
  <circle cx="${rightEyeX}" cy="${eyeY}" r="13" fill="#e5e5e5" stroke="rgba(200, 169, 126, 0.5)" stroke-width="1" />

  <circle cx="${leftEyeX + eyeShiftX}" cy="${eyeY + eyeShiftY}" r="6" fill="#0a0a0b" />
  <circle cx="${rightEyeX + eyeShiftX}" cy="${eyeY + eyeShiftY}" r="6" fill="#0a0a0b" />

  <!-- Catchlight highlights -->
  <circle cx="${leftEyeX + eyeShiftX - 2}" cy="${eyeY + eyeShiftY - 2}" r="2" fill="#ffffff" />
  <circle cx="${rightEyeX + eyeShiftX - 2}" cy="${eyeY + eyeShiftY - 2}" r="2" fill="#ffffff" />
</svg>`;

  fs.writeFileSync(path.join(framesDir, `frame_${i}.svg`), svgContent, 'utf8');
}

// Frame 0 is also the neutral center frame (zero shift)
const neutralAngle = 0;
const neutralHx = 200;
const neutralHy = 220;
const neutralSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#222226"/>
      <stop offset="100%" stop-color="#111113"/>
    </linearGradient>
    <linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#333338"/>
      <stop offset="100%" stop-color="#1a1a1e"/>
    </linearGradient>
  </defs>

  <path d="M 60 480 C 72 345, 128 316, 200 316 C 272 316, 328 345, 340 480 Z" fill="url(#bgGrad)" stroke="rgba(200, 169, 126, 0.3)" stroke-width="1.5" />
  <path d="M 165 321 L 200 364 L 235 321" fill="none" stroke="rgba(200, 169, 126, 0.5)" stroke-width="2" />
  <rect x="176" y="260" width="48" height="72" fill="#1e1e22" />

  <rect x="${neutralHx - 65}" y="${neutralHy - 95}" width="130" height="170" rx="48" fill="url(#headGrad)" stroke="rgba(200, 169, 126, 0.4)" stroke-width="1.5" />
  <path d="M ${neutralHx - 68} ${neutralHy - 65} A 68 68 0 0 1 ${neutralHx + 68} ${neutralHy - 65} Z" fill="#161619" />

  <line x1="${neutralHx - 60}" y1="${neutralHy - 5}" x2="${neutralHx + 60}" y2="${neutralHy - 5}" stroke="rgba(200, 169, 126, 0.3)" stroke-width="1.5" />
  <path d="M ${neutralHx} ${neutralHy + 10} L ${neutralHx} ${neutralHy + 35} L ${neutralHx + 10} ${neutralHy + 35}" fill="none" stroke="#666" stroke-width="2" />
  <line x1="${neutralHx - 15}" y1="${neutralHy + 55}" x2="${neutralHx + 15}" y2="${neutralHy + 55}" stroke="#555" stroke-width="2.5" />

  <circle cx="170" cy="205" r="13" fill="#e5e5e5" stroke="rgba(200, 169, 126, 0.5)" stroke-width="1" />
  <circle cx="230" cy="205" r="13" fill="#e5e5e5" stroke="rgba(200, 169, 126, 0.5)" stroke-width="1" />

  <circle cx="170" cy="205" r="6" fill="#0a0a0b" />
  <circle cx="230" cy="205" r="6" fill="#0a0a0b" />

  <circle cx="168" cy="203" r="2" fill="#ffffff" />
  <circle cx="228" cy="203" r="2" fill="#ffffff" />
</svg>`;

fs.writeFileSync(path.join(framesDir, `frame_center.svg`), neutralSvg, 'utf8');
console.log('Successfully generated 16 frame files in public/frames/');
