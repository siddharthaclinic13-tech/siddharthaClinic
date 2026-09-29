import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";

import { Link } from "react-router-dom";

import { clinic } from "../../data/clinic";
import { navigation } from "../../data/navigation";
import { createAppointmentUrl } from "../../utils/whatsapp";

export default function Footer() {
  const appointmentUrl = createAppointmentUrl();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">

          {/* =====================================
              BRAND
          ====================================== */}

          <div className="site-footer__brand">

            <Link
              to="/"
              className="site-footer__logo"
              aria-label={`${clinic.name} home`}
            >
              <div className="site-footer__logo-image">
                <img
                  src={clinic.logo}
                  alt=""
                />
              </div>

              <div>
                <span className="site-footer__name">
                  {clinic.shortName}
                </span>

                <span className="site-footer__location">
                  Kakinada, Andhra Pradesh
                </span>
              </div>
            </Link>

            {clinic.description && (
              <p className="site-footer__description">
                {clinic.description}
              </p>
            )}

            {appointmentUrl && (
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                <MessageCircle
                  size={18}
                  aria-hidden="true"
                />

                Book Appointment
              </a>
            )}

          </div>


          {/* =====================================
              QUICK LINKS
          ====================================== */}

          <div className="site-footer__column">

            <h2 className="site-footer__heading">
              Quick Links
            </h2>

            <nav aria-label="Footer navigation">
              <ul className="site-footer__links">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>


          {/* =====================================
              CONTACT
          ====================================== */}

          <div className="site-footer__column">

            <h2 className="site-footer__heading">
              Contact
            </h2>

            <ul className="site-footer__contact-list">

              <li>
                <MapPin
                  size={19}
                  aria-hidden="true"
                />

                <span>
                  {clinic.address.full}
                </span>
              </li>

              {clinic.phone && (
                <li>
                  <Phone
                    size={19}
                    aria-hidden="true"
                  />

                  <a href={`tel:${clinic.phone}`}>
                    {clinic.phone}
                  </a>
                </li>
              )}

              {clinic.email && (
                <li>
                  <Mail
                    size={19}
                    aria-hidden="true"
                  />

                  <a href={`mailto:${clinic.email}`}>
                    {clinic.email}
                  </a>
                </li>
              )}

            </ul>

          </div>


          {/* =====================================
              SOCIAL
          ====================================== */}

          <div className="site-footer__column">

            <h2 className="site-footer__heading">
              Connect With Us
            </h2>

            <div className="site-footer__social">

              {clinic.social.instagram && (
                <a
                  href={clinic.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Share2
                    size={20}
                    aria-hidden="true"
                  />
                </a>
              )}

              {clinic.social.facebook && (
                <a
                  href={clinic.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Share2
                    size={20}
                    aria-hidden="true"
                  />
                </a>
              )}

              {clinic.social.youtube && (
                <a
                  href={clinic.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Share2
                    size={20}
                    aria-hidden="true"
                  />
                </a>
              )}

            </div>

            {clinic.mapsUrl && (
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Get Directions →
              </a>
            )}

          </div>

        </div>


        {/* =====================================
            FOOTER BOTTOM
        ====================================== */}

        <div className="site-footer__bottom">

          <p>
            © {currentYear} {clinic.name}. All rights reserved.
          </p>

          <div className="site-footer__legal">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}