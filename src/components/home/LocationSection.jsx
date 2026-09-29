import {
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import { clinic } from "../../data/clinic";

export default function LocationSection() {
  const {
    address,
    mapsUrl,
    phone,
  } = clinic;

  return (
    <section
      className="section location-section"
      id="location"
    >
      <div className="container">

        <div className="location-section__grid">

          {/* =================================================
              LOCATION INFORMATION
              ================================================= */}

          <div className="location-section__content">

            <span className="location-section__eyebrow">
              Visit Our Clinic
            </span>

            <h2 className="location-section__title">
              Find Siddhartha Dental Hospital
            </h2>

            <p className="location-section__description">
              Visit our clinic in Kakinada for your dental
              consultation and treatment.
            </p>

            <div className="location-section__details">

              <div className="location-detail">

                <div
                  className="location-detail__icon"
                  aria-hidden="true"
                >
                  <MapPin size={21} />
                </div>

                <div>
                  <h3>Clinic Address</h3>

                  <address>
                    {address.street}
                    <br />
                    {address.city}, {address.state}
                    <br />
                    {address.country}
                  </address>
                </div>

              </div>

              {phone && (
                <div className="location-detail">

                  <div
                    className="location-detail__icon"
                    aria-hidden="true"
                  >
                    <Phone size={21} />
                  </div>

                  <div>
                    <h3>Call Us</h3>

                    <a href={`tel:${phone}`}>
                      {phone}
                    </a>
                  </div>

                </div>
              )}

            </div>

            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                <Navigation
                  size={18}
                  aria-hidden="true"
                />
                Get Directions
              </a>
            )}

          </div>

          {/* =================================================
              MAP
              ================================================= */}

          <div className="location-section__map">

            {clinic.mapEmbedUrl ? (
              <iframe
                src={clinic.mapEmbedUrl}
                title="Siddhartha Super Speciality Dental Hospital location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="location-section__map-placeholder">

                <div
                  className="location-section__map-icon"
                  aria-hidden="true"
                >
                  <MapPin size={34} />
                </div>

                <h3>Clinic Location</h3>

                <p>
                  {address.city}, {address.state}
                </p>

                <span>
                  Google Maps location will be added
                  using the clinic-provided URL.
                </span>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}