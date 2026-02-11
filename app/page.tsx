export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Shop />
      <Activation />
      <About />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 border-b border-neutral-800">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        0xTanda
      </h1>
      <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl">
        Bridging the Gap Between Realities.
      </p>
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
  return (
    <section id="shop" className="py-24 px-6 border-b border-neutral-800">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Phygital Collection
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {["Jacket", "Hoodie", "T-Shirt", "Cap"].map((item, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-white transition"
          >
            <div className="h-40 bg-neutral-800 rounded mb-4" />
            <h3 className="font-semibold text-lg">0xTanda {item}</h3>
            <p className="text-sm text-neutral-400 mt-2">
              Embedded NFC • NFT Digital Twin • Limited Drop
            </p>

            <div className="mt-4 flex gap-2 text-xs">
              <button className="px-3 py-2 bg-neutral-800 rounded">
                Shopee
              </button>
              <button className="px-3 py-2 bg-neutral-800 rounded">
                Tokopedia
              </button>
            </div>
          </div>
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
