import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { clinic } from "../../data/clinic";

export default function AboutPreview() {
  const {
    introduction,
    mission,
    approach,
    patientCare,
    environment,
  } = clinic.about;

  const highlights = [
    mission,
    approach,
    patientCare,
    environment,
  ].filter(Boolean);

  return (
    <section
      id="about"
      className="section about-preview"
    >
      <div className="container">
        <div className="about-preview__grid">

          {/* =====================================
              VISUAL
          ====================================== */}

          <div className="about-preview__visual">

            <div className="about-preview__image-wrapper">
              <img
                src={clinic.hero.image}
                alt={clinic.hero.imageAlt}
                className="about-preview__image"
                loading="lazy"
              />
            </div>

            <div
              className="about-preview__accent"
              aria-hidden="true"
            />

          </div>


          {/* =====================================
              CONTENT
          ====================================== */}

          <div className="about-preview__content">

            <span className="about-preview__eyebrow">
              About Our Hospital
            </span>

            <h2 className="about-preview__title">
              {clinic.name}
            </h2>

            {introduction ? (
              <p className="about-preview__description">
                {introduction}
              </p>
            ) : (
              <p className="about-preview__description">
                Learn more about our dental hospital,
                approach to care, and commitment to
                patient-focused dental treatment.
              </p>
            )}

            {highlights.length > 0 && (
              <ul className="about-preview__highlights">
                {highlights.map((highlight, index) => (
                  <li key={`${highlight}-${index}`}>
                    <CheckCircle2
                      size={20}
                      aria-hidden="true"
                    />

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <Link
              to="/about"
              className="text-link about-preview__link"
            >
              Learn More About Us

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}