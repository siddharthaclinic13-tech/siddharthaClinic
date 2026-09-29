import { Routes, Route } from "react-router-dom";


import SiteLayout from "./components/layout/SiteLayout";

import Hero from "./components/home/Hero";
import AboutPreview from "./components/home/AboutPreview";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ClinicGallery from "./components/home/ClinicGallery";
import ReviewsSection from "./components/home/ReviewsSection";
import LocationSection from "./components/home/LocationSection";
import FinalCTA from "./components/home/FinalCTA";

import DoctorsSlider from "./components/doctors/DoctorsSlider";
import ServicesSection from "./components/services/ServicesSection";

import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";

function Home() {
  return (
    <>
     

      <main>
        <Hero />
        <AboutPreview />
        <DoctorsSlider />
        <ServicesSection />
        <WhyChooseUs />
        <ClinicGallery />
        <ReviewsSection />
        <LocationSection />
        <FinalCTA />
      </main>
    </>
  );
}

function App() {
  return (
    <SiteLayout>
     <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/about"
    element={<About />}
  />

  <Route
    path="/services"
    element={<Services />}
  />

  <Route
    path="/services/:slug"
    element={<ServiceDetails />}
  />

  <Route
    path="/doctors"
    element={<Doctors />}
  />

  <Route
    path="/contact"
    element={<Contact />}
  />
</Routes>
    </SiteLayout>
  );
}

export default App;