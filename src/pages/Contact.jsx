import {
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

import SEO from "../components/common/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";

import { clinic } from "../data/clinic";
import { seo } from "../data/seo";
import { createAppointmentUrl } from "../utils/whatsapp";

export default function Contact() {
  const appointmentUrl = createAppointmentUrl();

  const {
    address,
    phone,
    email,
    mapsUrl,
    mapEmbedUrl,
  } = clinic;

  return (
    <>
      <SEO
        title={seo.contact.title}
        description={seo.contact.description}
        path="/contact"
      />

      <main className="contact-page">

        {/* =================================================
            HERO
            ================================================= */}

        <section className="contact-page__hero">
          <div className="container">

            <Breadcrumbs
              items={[
                {
                  label: "Contact",
                  path: "/contact",
                },
              ]}
            />

            <div className="contact-page__hero-content">

              <span className="contact-page__eyebrow">
                Contact Us
              </span>

              <h1 className="contact-page__title">
                Get in Touch With Our Dental Hospital
              </h1>

              <p className="contact-page__description">
                Contact {clinic.shortName} for appointment
                information, directions, and dental care
                enquiries.
              </p>

            </div>

          </div>
        </section>

        {/* =================================================
            CONTACT DETAILS
            ================================================= */}

        <section className="section contact-page__details">
          <div className="container">

            <div className="contact-page__grid">

              {/* ADDRESS */}

              <article className="contact-card">

                <div
                  className="contact-card__icon"
                  aria-hidden="true"
                >
                  <MapPin size={23} />
                </div>

                <div>
                  <h2>
                    Visit Our Clinic
                  </h2>

                  <address>
                    {address.street}
                    <br />
                    {address.city}, {address.state}
                    <br />
                    {address.country}
                  </address>

                  {mapsUrl && (
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card__link"
                    >
                      <Navigation
                        size={16}
                        aria-hidden="true"
                      />
                      Get Directions
                    </a>
                  )}
                </div>

              </article>

              {/* PHONE */}

              {phone && (
                <article className="contact-card">

                  <div
                    className="contact-card__icon"
                    aria-hidden="true"
                  >
                    <Phone size={23} />
                  </div>

                  <div>
                    <h2>
                      Call Us
                    </h2>

                    <a
                      href={`tel:${phone}`}
                      className="contact-card__value"
                    >
                      {phone}
                    </a>

                    <a
                      href={`tel:${phone}`}
                      className="contact-card__link"
                    >
                      <Phone
                        size={16}
                        aria-hidden="true"
                      />
                      Call Clinic
                    </a>
                  </div>

                </article>
              )}

              {/* EMAIL */}

              {email && (
                <article className="contact-card">

                  <div
                    className="contact-card__icon"
                    aria-hidden="true"
                  >
                    <Mail size={23} />
                  </div>

                  <div>
                    <h2>
                      Email Us
                    </h2>

                    <a
                      href={`mailto:${email}`}
                      className="contact-card__value"
                    >
                      {email}
                    </a>

                    <a
                      href={`mailto:${email}`}
                      className="contact-card__link"
                    >
                      <Mail
                        size={16}
                        aria-hidden="true"
                      />
                      Send Email
                    </a>
                  </div>

                </article>
              )}

            </div>

          </div>
        </section>

        {/* =================================================
            APPOINTMENT
            ================================================= */}

        {appointmentUrl && (
          <section className="contact-page__appointment">
            <div className="container">

              <div className="contact-page__appointment-inner">

                <div className="contact-page__appointment-icon">
                  <MessageCircle
                    size={30}
                    aria-hidden="true"
                  />
                </div>

                <div className="contact-page__appointment-content">

                  <span>
                    WhatsApp Appointment
                  </span>

                  <h2>
                    Book Your Dental Appointment
                  </h2>

                  <p>
                    Send us your appointment request
                    through WhatsApp.
                  </p>

                </div>

                <a
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--white"
                >
                  <MessageCircle
                    size={18}
                    aria-hidden="true"
                  />
                  Book Appointment
                </a>

              </div>

            </div>
          </section>
        )}

        {/* =================================================
            MAP
            ================================================= */}

        <section className="section contact-page__map-section">
          <div className="container">

            <div className="contact-page__map-header">

              <div>
                <span className="contact-page__section-eyebrow">
                  Location
                </span>

                <h2>
                  Find Our Clinic
                </h2>
              </div>

              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--outline"
                >
                  <Navigation
                    size={18}
                    aria-hidden="true"
                  />
                  Open Google Maps
                </a>
              )}

            </div>

            <div className="contact-page__map">

              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  title={`${clinic.name} location`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="contact-page__map-placeholder">

                  <MapPin
                    size={38}
                    aria-hidden="true"
                  />

                  <h3>
                    {address.city}, {address.state}
                  </h3>

                  <p>
                    {address.full}
                  </p>

                  <span>
                    Google Maps information will be added
                    using the clinic-provided map URL.
                  </span>

                </div>
              )}

            </div>

          </div>
        </section>

      </main>
    </>
  );
}