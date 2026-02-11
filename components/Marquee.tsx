"use client";

export default function Marquee() {
  const content =
    "PHYGITAL STREETWEAR • NFC ENABLED • DIGITAL TWIN NFT • WEB3 AUTHENTICITY • JAKARTA TO GLOBAL • ";

  return (
    <div className="relative overflow-hidden border-y border-neutral-800 bg-black py-5">
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="whitespace-nowrap animate-marquee text-sm tracking-[0.25em] text-neutral-500">
        {content.repeat(4)}
      </div>
    </div>
  );
}
