import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { services } from "../../data/services";
import { getFeaturedServices } from "../../utils/helpers";

import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const featuredServices =
    getFeaturedServices(services);

  if (!featuredServices.length) {
    return null;
  }

  return (
    <section
      id="services"
      className="section services-section"
    >
      <div className="container">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="services-section__header">

          <div>
            <span className="services-section__eyebrow">
              Our Dental Services
            </span>

            <h2 className="services-section__title">
              Complete Dental Care
            </h2>

            <p className="services-section__description">
              Explore the dental services available
              at Siddhartha Super Speciality Dental
              Hospital.
            </p>
          </div>

          <Link
            to="/services"
            className="text-link"
          >
            View All Services

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>


        {/* =====================================
            SERVICES GRID
        ====================================== */}

        <div className="services-section__grid">

          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
