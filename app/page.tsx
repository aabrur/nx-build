import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Activation from "@/components/Activation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />
        <Marquee />
        <Activation />
      </main>

      <Footer />
    </>
  );
}
