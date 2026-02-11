export default function Activation() {
  return (
    <section id="activation" className="py-24 px-6 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Activate Your Digital Twin
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm text-neutral-400">
          {["Create Wallet", "Copy Address", "Scan NFC", "Claim NFT"].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-purple-500 transition"
            >
              <div className="text-xl font-semibold mb-3">0{i + 1}</div>
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
