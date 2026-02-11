// app/verify/page.tsx
export default function VerifyPage() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform"; // replace with real

  return (
    <main className="min-h-screen pt-28 pb-12 px-6 bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-xl bg-[#121212] border border-[#333] flex items-center justify-center shadow">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#836EF9]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>

        <h2 className="text-2xl font-bold mb-2">REDEMPTION PORTAL</h2>
        <p className="text-neutral-400 mb-6">Verifikasi keaslian produk fisik dan klaim aset digital Anda melalui formulir kami.</p>

        <div className="bg-[#121212] border border-[#836EF9]/30 p-6 mb-6">
          <h3 className="text-white font-bold mb-2">PANDUAN VERIFIKASI</h3>
          <ul className="text-sm text-neutral-400 text-left list-disc pl-5 space-y-2">
            <li>Siapkan Kartu Fisik "Genesis Access Card".</li>
            <li>Gosok area pelindung untuk melihat Kode Hash unik.</li>
            <li>Klik tombol di bawah untuk membuka Formulir Klaim.</li>
          </ul>
        </div>

        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full bg-white text-black py-3 rounded-md font-bold">BUKA FORMULIR VERIFIKASI</a>
        <p className="mt-3 text-xs text-neutral-500">Anda akan diarahkan ke Google Form eksternal yang aman.</p>
      </div>
    </main>
  );
}
