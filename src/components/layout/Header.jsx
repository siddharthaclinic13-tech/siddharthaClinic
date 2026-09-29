import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

import { clinic } from "../../data/clinic";
import { navigation } from "../../data/navigation";
import { createAppointmentUrl } from "../../utils/whatsapp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const appointmentUrl = createAppointmentUrl();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((previous) => !previous);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">

          {/* Logo */}
          <NavLink
            to="/"
            className="site-header__brand"
            aria-label={`${clinic.name} home`}
            onClick={closeMenu}
          >
            <div className="site-header__logo">
              <img
                src={clinic.logo}
                alt=""
              />
            </div>

            <div className="site-header__brand-text">
              <span className="site-header__name">
                {clinic.shortName}
              </span>

              <span className="site-header__location">
                Kakinada
              </span>
            </div>
          </NavLink>


          {/* Desktop Navigation */}
          <nav
            className="site-header__desktop-nav"
            aria-label="Main navigation"
          >
            <ul className="site-header__nav-list">
              {navigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `site-header__nav-link ${
                        isActive
                          ? "site-header__nav-link--active"
                          : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>


          {/* Desktop Actions */}
          <div className="site-header__actions">

            {clinic.phone && (
              <a
                href={`tel:${clinic.phone}`}
                className="site-header__phone"
                aria-label={`Call ${clinic.name}`}
              >
                <Phone size={18} aria-hidden="true" />
                <span>Call</span>
              </a>
            )}

            {appointmentUrl && (
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary button--small"
              >
                <MessageCircle
                  size={17}
                  aria-hidden="true"
                />
                <span>Book Appointment</span>
              </a>
            )}

          </div>


          {/* Mobile Menu Button */}
          <button
            type="button"
            className="site-header__menu-button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X
                size={25}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={25}
                aria-hidden="true"
              />
            )}
          </button>

        </div>
      </div>


      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`site-header__mobile-wrapper ${
          isMenuOpen
            ? "site-header__mobile-wrapper--open"
            : ""
        }`}
      >
        <nav
          className="site-header__mobile-nav"
          aria-label="Mobile navigation"
        >
          <div className="container">

            <ul className="site-header__mobile-list">
              {navigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `site-header__mobile-link ${
                        isActive
                          ? "site-header__mobile-link--active"
                          : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>


            {/* Mobile Contact Actions */}
            <div className="site-header__mobile-actions">

              {clinic.phone && (
                <a
                  href={`tel:${clinic.phone}`}
                  className="button button--outline"
                  onClick={closeMenu}
                >
                  <Phone
                    size={18}
                    aria-hidden="true"
                  />
                  Call Clinic
                </a>
              )}

              {appointmentUrl && (
                <a
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary"
                  onClick={closeMenu}
                >
                  <MessageCircle
                    size={18}
                    aria-hidden="true"
                  />
                  WhatsApp Appointment
                </a>
              )}

            </div>

          </div>
        </nav>
      </div>
    </header>
  );
}