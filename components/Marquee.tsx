// components/Marquee.tsx
"use client";

export default function Marquee() {
  const text =
    "PHYGITAL STREETWEAR • NFC ENABLED • DIGITAL TWIN NFT • WEB3 AUTHENTICITY • JAKARTA TO GLOBAL • ";

  return (
    <div className="relative overflow-hidden border-y border-neutral-800 bg-black py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="whitespace-nowrap animate-marquee text-xs tracking-wide text-neutral-400">
        {text.repeat(6)}
      </div>
    </div>
  );
}
