import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import About from "./_components/About";
import Services from "./_components/Services";
import Industries from "./_components/Industries";
import Process from "./_components/Process";
import Portfolio from "./_components/Portfolio";
import Team from "./_components/Team";
import Testimonials from "./_components/Testimonials";
import CtaBand from "./_components/CtaBand";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import ScrollTop from "./_components/ScrollTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Industries />
        <Process />
        {/* <Portfolio /> */}
        <Team />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
