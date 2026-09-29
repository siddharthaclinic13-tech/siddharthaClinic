import {
  ArrowRight,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { clinic } from "../../data/clinic";
import { createAppointmentUrl } from "../../utils/whatsapp";

export default function Hero() {
  const appointmentUrl = createAppointmentUrl();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">

          {/* =====================================
              HERO CONTENT
          ====================================== */}

          <div className="hero__content">

            {clinic.hero.eyebrow && (
              <span className="hero__eyebrow">
                {clinic.hero.eyebrow}
              </span>
            )}

            <h1 className="hero__title">
              {clinic.hero.title}
            </h1>

            {clinic.hero.description && (
              <p className="hero__description">
                {clinic.hero.description}
              </p>
            )}

            {/* Location */}
            <div className="hero__location">
              <MapPin
                size={18}
                aria-hidden="true"
              />

              <span>
                {clinic.address.city},{" "}
                {clinic.address.state}
              </span>
            </div>


            {/* =================================
                CTA BUTTONS
            ================================== */}

            <div className="hero__actions">

              {appointmentUrl && (
                <a
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary button--large"
                >
                  <MessageCircle
                    size={19}
                    aria-hidden="true"
                  />

                  Book Appointment
                </a>
              )}

              <a
                href="#about"
                className="button button--outline button--large"
              >
                Explore Our Care

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </a>

            </div>

          </div>


          {/* =====================================
              HERO IMAGE
          ====================================== */}

          <div className="hero__visual">

            <div className="hero__image-wrapper">

              <img
                src={clinic.hero.image}
                alt={clinic.hero.imageAlt}
                className="hero__image"
                fetchPriority="high"
              />

            </div>


            {/* Decorative element */}

            <div
              className="hero__decor hero__decor--one"
              aria-hidden="true"
            />

            <div
              className="hero__decor hero__decor--two"
              aria-hidden="true"
            />

          </div>

        </div>
      </div>
    </section>
  );
}