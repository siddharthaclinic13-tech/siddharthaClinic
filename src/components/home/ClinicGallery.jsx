import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { gallery } from "../../data/gallery";

export default function ClinicGallery() {
  if (!gallery.length) {
    return null;
  }

  return (
    <section
      className="section gallery-section"
      id="gallery"
    >
      <div className="container">

        <div className="gallery-section__header">

          <div>
            <span className="gallery-section__eyebrow">
              Our Clinic
            </span>

            <h2 className="gallery-section__title">
              A Comfortable Space for Your Dental Care
            </h2>
          </div>

          <p className="gallery-section__description">
            Take a look at the clinic environment and spaces
            designed to make your dental visit comfortable.
          </p>

        </div>

        <div className="gallery-grid">

          {gallery.map((item, index) => (
            <article
              className={`gallery-card gallery-card--${index + 1}`}
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              {item.title && (
                <div className="gallery-card__overlay">
                  <h3>{item.title}</h3>
                </div>
              )}
            </article>
          ))}

        </div>

        <div className="gallery-section__footer">

          <Link
            to="/contact"
            className="button button--outline"
          >
            Visit Our Clinic
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

        </div>

      </div>
    </section>
  );
}