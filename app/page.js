"use client";
import Script from "next/script";
import About from "./_components/About";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import WhyUs from "./_components/WhyUs";
import Services from "./_components/Services";
import Portfolio from "./_components/Portfolio";
import Team from "./_components/Team";
import Testimonals from "./_components/Testimonals";
import Contacts from "./_components/Contacts";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        {/* <Clients /> */}
        <About />
        <WhyUs />
        {/* <Skills /> */}
        <Services />
        <Portfolio />
        <Team />
        <Testimonals />
        <Contacts/>
      </main>
      <Footer/>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      {/* <div id="preloader"></div> */}

      {/* Vendor JS Files with crossOrigin attribute */}
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/php-email-form/validate.js"
        strategy="beforeInteractive"
      />
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/aos/aos.js"
        strategy="beforeInteractive"
      />
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/glightbox/js/glightbox.min.js"
        strategy="beforeInteractive"
      />
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/waypoints/noframework.waypoints.js"
        strategy="beforeInteractive"
      />
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
        strategy="beforeInteractive"
      />
      <Script
        crossOrigin="anonymous"
        src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
        strategy="beforeInteractive"
      />

      {/* Main JS File */}
      <Script
        crossOrigin="anonymous"
        src="/assets/js/main.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
