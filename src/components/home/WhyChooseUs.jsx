import {
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";

import { whyChooseUs } from "../../data/whyChooseUs";

const iconMap = {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  CheckCircle2,
};

export default function WhyChooseUs() {
  if (!whyChooseUs.length) {
    return null;
  }

  return (
    <section
      className="section why-choose"
      id="why-choose-us"
    >
      <div className="container">

        <div className="why-choose__grid">

          {/* =====================================
              CONTENT
          ====================================== */}

          <div className="why-choose__content">

            <span className="why-choose__eyebrow">
              Why Choose Us
            </span>

            <h2 className="why-choose__title">
              Dental Care Designed Around You
            </h2>

            <p className="why-choose__description">
              Our approach focuses on clear communication,
              comfortable care, and the individual needs
              of every patient.
            </p>


            <div className="why-choose__list">

              {whyChooseUs.map((item) => {
                const Icon =
                  iconMap[item.icon] ||
                  CheckCircle2;

                return (
                  <article
                    className="why-choose__item"
                    key={item.id}
                  >
                    <div
                      className="why-choose__icon"
                      aria-hidden="true"
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="why-choose__item-title">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="why-choose__item-description">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}

            </div>

          </div>


          {/* =====================================
              VISUAL
          ====================================== */}

          <div className="why-choose__visual">

            <div className="why-choose__visual-card">

              <div className="why-choose__visual-icon">
                <HeartHandshake
                  size={38}
                  aria-hidden="true"
                />
              </div>

              <span className="why-choose__visual-label">
                Patient-Focused Care
              </span>

              <p>
                A welcoming approach to dental care
                with attention to patient needs.
              </p>

            </div>

            <div
              className="why-choose__shape"
              aria-hidden="true"
            />

          </div>

        </div>

      </div>
    </section>
  );
}