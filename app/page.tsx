import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Reviews from "@/components/landing/Reviews";
import LatestNews from "@/components/landing/LatestNews";
import Footer from "@/components/landing/Footer";
import FloatingButtons from "@/components/landing/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <LatestNews />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
