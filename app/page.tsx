"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Shop />
      <Activation />
      <About />
      <Footer />
      <FloatingContact />
    </main>
  );
}

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-40 pb-32 px-6 border-b border-neutral-800">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        0xTanda
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl"
      >
        Bridging the Gap Between Realities.
      </motion.p>

      <p className="mt-2 text-sm text-neutral-500">
        Wear the Future. Own the Data.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#shop"
          className="px-6 py-3 bg-white text-black font-medium rounded-md hover:opacity-80 transition"
        >
          Explore Collection
        </a>
        <a
          href="#activation"
          className="px-6 py-3 border border-neutral-700 rounded-md hover:bg-neutral-900 transition"
        >
          Digital Activation
        </a>
      </div>
    </section>
  );
}

function Shop() {
  const products = ["Jacket", "Hoodie", "T-Shirt", "Cap"];

  return (
    <section id="shop" className="py-24 px-6 border-b border-neutral-800">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Phygital Collection
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
        {products.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="min-w-[280px] bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-white transition"
          >
            <div className="h-40 bg-neutral-800 rounded mb-4" />
            <h3 className="font-semibold text-lg">0xTanda {item}</h3>
            <p className="text-sm text-neutral-400 mt-2">
              Embedded NFC • NFT Digital Twin • Limited Drop
            </p>

            <div className="mt-4 flex gap-2 text-xs">
              <button className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700 transition">
                Shopee
              </button>
              <button className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700 transition">
                Tokopedia
              </button>
              <button className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700 transition">
                TikTok
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Activation() {
  return (
    <section
      id="activation"
      className="py-24 px-6 border-b border-neutral-800 bg-neutral-950"
    >
      <h2 className="text-3xl font-semibold text-center mb-10">
        Digital Twin Activation
      </h2>

      <div className="max-w-3xl mx-auto text-neutral-400 space-y-4 text-sm">
        <p>1. Create a crypto wallet (Metamask / WalletConnect).</p>
        <p>2. Copy your public wallet address.</p>
        <p>3. Scan the NFC / QR tag on your 0xTanda product.</p>
        <p>4. Submit your address to register your Digital Twin NFT.</p>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="px-6 py-3 bg-white text-black font-medium rounded-md hover:opacity-80 transition"
        >
          Claim Digital Twin
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 px-6 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">About 0xTanda</h2>
        <p className="text-neutral-400">
          0xTanda is a Jakarta-based phygital streetwear brand combining
          physical fashion with blockchain-powered digital ownership.
          Every piece carries a digital twin — merging authenticity,
          community access, and Web3 innovation.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 text-center text-neutral-500 text-sm">
      © {new Date().getFullYear()} 0xTanda — Jakarta to Global
    </footer>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold tracking-wide">0xTanda</span>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-400">
          <a href="#shop" className="hover:text-white transition">Shop</a>
          <a href="#activation" className="hover:text-white transition">Activation</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>
      </div>
    </header>
  );
}

function FloatingContact() {
  return (
    <a
      href="mailto:hello@0xtanda.xyz"
      className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg hover:opacity-80 transition"
    >
      Contact
    </a>
  );
}

