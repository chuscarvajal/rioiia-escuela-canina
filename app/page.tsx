import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import AboutUs from "@/components/landing/AboutUs";
import HowWeWork from "@/components/landing/HowWeWork";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Gallery from "@/components/landing/Gallery";
import Reviews from "@/components/landing/Reviews";
import FAQ from "@/components/landing/FAQ";
import LatestNews from "@/components/landing/LatestNews";
import Footer from "@/components/landing/Footer";
import FloatingButtons from "@/components/landing/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <HowWeWork />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <FAQ />
      <LatestNews />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
