import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import SEO from "../components/common/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";

import { services } from "../data/services";
import { seo } from "../data/seo";

export default function Services() {
  return (
    <>
      <SEO
        title={seo.services.title}
        description={seo.services.description}
        path="/services"
      />

      <main className="services-page">

        {/* =================================================
            PAGE HERO
            ================================================= */}

        <section className="services-page__hero">
          <div className="container">

            <Breadcrumbs
              items={[
                {
                  label: "Services",
                  path: "/services",
                },
              ]}
            />

            <div className="services-page__hero-content">

              <span className="services-page__eyebrow">
                Dental Services
              </span>

              <h1 className="services-page__title">
                Dental Care Services in Kakinada
              </h1>

              <p className="services-page__description">
                Explore the dental services provided by
                Siddhartha Super Speciality Dental Hospital.
              </p>

            </div>

          </div>
        </section>

        {/* =================================================
            SERVICES
            ================================================= */}

        <section className="section services-page__list">
          <div className="container">

            <div className="services-page__grid">

              {services.map((service) => (
                <article
                  className="services-page__card"
                  key={service.id}
                >

                  <div className="services-page__image-wrapper">

                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        className="services-page__image-placeholder"
                        aria-hidden="true"
                      />
                    )}

                  </div>

                  <div className="services-page__card-content">

                    <h2>
                      {service.title}
                    </h2>

                    {service.shortDescription && (
                      <p>
                        {service.shortDescription}
                      </p>
                    )}

                    <Link
                      to={`/services/${service.slug}`}
                      className="services-page__link"
                    >
                      Learn More
                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                      />
                    </Link>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

      </main>
    </>
  );
}