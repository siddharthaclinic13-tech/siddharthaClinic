import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import SEO from "../components/common/SEO";
import ServiceSchema from "../components/common/ServiceSchema";
import Breadcrumbs from "../components/common/Breadcrumbs";

import { services } from "../data/services";
import { getServiceBySlug } from "../utils/helpers";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = getServiceBySlug(
    services,
    slug
  );

  /*
   * =====================================================
   * SERVICE NOT FOUND
   * =====================================================
   */

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | Siddhartha Dental Hospital"
          description="The requested dental service could not be found."
          path={`/services/${slug}`}
          noIndex
        />

        <main className="service-details service-details--not-found">

          <div className="container">

            <div className="service-details__not-found">

              <span>
                404
              </span>

              <h1>
                Service Not Found
              </h1>

              <p>
                The dental service you are looking for
                could not be found.
              </p>

              <Link
                to="/services"
                className="button button--primary"
              >
                View All Services

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

            </div>

          </div>

        </main>
      </>
    );
  }

  /*
   * =====================================================
   * RELATED SERVICES
   * =====================================================
   */

  const relatedServices = services.filter(
    (item) => item.id !== service.id
  );

  /*
   * =====================================================
   * SERVICE PAGE
   * =====================================================
   */

  return (
    <>
      <SEO
        title={`${service.title} | Siddhartha Dental Hospital`}
        description={
          service.shortDescription ||
          `Learn about ${service.title} at Siddhartha Super Speciality Dental Hospital in Kakinada.`
        }
        path={`/services/${service.slug}`}
      />

      <ServiceSchema
        service={service}
      />

      <main className="service-details">

        {/* =================================================
            HERO
            ================================================= */}

        <section className="service-details__hero">

          <div className="container">

            <Breadcrumbs
              items={[
                {
                  label: "Services",
                  path: "/services",
                },
                {
                  label: service.title,
                  path: `/services/${service.slug}`,
                },
              ]}
            />

            <div className="service-details__hero-grid">

              {/* HERO CONTENT */}

              <div className="service-details__hero-content">

                <span className="service-details__eyebrow">
                  Dental Service
                </span>

                <h1 className="service-details__title">
                  {service.title}
                </h1>

                {service.shortDescription && (
                  <p className="service-details__description">
                    {service.shortDescription}
                  </p>
                )}

              </div>

              {/* HERO IMAGE */}

              <div className="service-details__hero-image">

                {service.image ? (
                  <img
                    src={service.image}
                    alt={
                      service.imageAlt ||
                      service.title
                    }
                  />
                ) : (
                  <div
                    className="service-details__image-placeholder"
                    aria-hidden="true"
                  />
                )}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            SERVICE DESCRIPTION
            ================================================= */}

        <section className="section service-details__content">

          <div className="container">

            <div className="service-details__content-grid">

              {/* MAIN CONTENT */}

              <article className="service-details__article">

                <span className="service-details__section-eyebrow">
                  About This Service
                </span>

                <h2>
                  {service.title}
                </h2>

                {service.description && (
                  <p>
                    {service.description}
                  </p>
                )}

              </article>

              {/* SIDEBAR */}

              <aside className="service-details__sidebar">

                <div className="service-details__appointment">

                  <span>
                    Need Dental Care?
                  </span>

                  <h2>
                    Contact Our Clinic
                  </h2>

                  <p>
                    Get in touch with Siddhartha Dental
                    Hospital to discuss your dental care.
                  </p>

                  <Link
                    to="/contact"
                    className="button button--primary"
                  >
                    Contact Us

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                    />
                  </Link>

                </div>

              </aside>

            </div>

          </div>

        </section>

        {/* =================================================
            RELATED SERVICES
            ================================================= */}

        {relatedServices.length > 0 && (
          <section className="section service-details__related">

            <div className="container">

              <div className="service-details__related-header">

                <div>

                  <span className="service-details__section-eyebrow">
                    Explore More
                  </span>

                  <h2>
                    Other Dental Services
                  </h2>

                </div>

                <Link
                  to="/services"
                  className="text-link"
                >
                  View All Services

                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>

              </div>

              <div className="service-details__related-grid">

                {relatedServices.map((item) => (
                  <Link
                    to={`/services/${item.slug}`}
                    className="service-details__related-card"
                    key={item.id}
                  >

                    <h3>
                      {item.title}
                    </h3>

                    {item.shortDescription && (
                      <p>
                        {item.shortDescription}
                      </p>
                    )}

                    <span>
                      Learn More

                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                      />
                    </span>

                  </Link>
                ))}

              </div>

            </div>

          </section>
        )}

        {/* =================================================
            BACK TO SERVICES
            ================================================= */}

        <div className="service-details__back">

          <div className="container">

            <Link
              to="/services"
              className="text-link"
            >
              <ArrowLeft
                size={17}
                aria-hidden="true"
              />

              Back to Services
            </Link>

          </div>

        </div>

      </main>
    </>
  );
}