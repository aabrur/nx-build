export default function Activation() {
  const steps = [
    "Create Crypto Wallet",
    "Copy Public Address",
    "Scan NFC or QR Tag",
    "Claim Your Digital Twin",
  ];

  return (
    <section
      id="activation"
      className="relative py-28 px-6 border-b border-neutral-800 bg-neutral-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Activate Your Digital Twin
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-neutral-400 mb-16">
          Every 0xTanda piece carries a verifiable digital identity.
          Follow the steps below to unlock ownership and enter the phygital layer.
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group p-8 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-[#836EF9] hover:shadow-[0_0_30px_rgba(131,110,249,0.25)]"
            >
              <div className="text-4xl font-bold mb-4 text-[#836EF9]">
                0{i + 1}
              </div>

              <p className="text-neutral-400 group-hover:text-white transition-colors duration-300">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="#"
            className="inline-block px-10 py-4 bg-[#836EF9] text-black font-medium rounded-md transition hover:opacity-90 shadow-lg"
          >
            Claim Digital Twin
          </a>
        </div>
      </div>
    </section>
  );
}
