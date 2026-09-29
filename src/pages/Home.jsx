import SEO from "../components/common/SEO";
import ClinicSchema from "../components/common/ClinicSchema";

import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import DoctorsSlider from "../components/home/DoctorsSlider";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Gallery from "../components/home/Gallery";
import Reviews from "../components/home/Reviews";
import LocationPreview from "../components/home/LocationPreview";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Siddhartha Super Speciality Dental Hospital | Dentist in Kakinada"
        description="Siddhartha Super Speciality Dental Hospital in Kakinada."
        canonical="/"
      />

      <ClinicSchema />

      <Hero />

      <AboutPreview />

      <DoctorsSlider />

      <ServicesPreview />

      <WhyChooseUs />

      <Gallery />

      <Reviews />

      <LocationPreview />

      <CTASection />
    </>
  );
}