import {
  MessageCircle,
  Phone,
} from "lucide-react";

import { clinic } from "../../data/clinic";
import { createAppointmentUrl } from "../../utils/whatsapp";

export default function FinalCTA() {
  const appointmentUrl = createAppointmentUrl();

  return (
    <section className="final-cta">
      <div className="container">

        <div className="final-cta__inner">

          <div className="final-cta__content">

            <span className="final-cta__eyebrow">
              Book Your Appointment
            </span>

            <h2 className="final-cta__title">
              Take the Next Step Towards a Healthier Smile
            </h2>

            <p className="final-cta__description">
              Contact {clinic.shortName} to discuss your
              dental care needs and schedule an appointment.
            </p>

            <div className="final-cta__actions">

              {appointmentUrl && (
                <a
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--white"
                >
                  <MessageCircle
                    size={19}
                    aria-hidden="true"
                  />
                  Book Appointment
                </a>
              )}

              {clinic.phone && (
                <a
                  href={`tel:${clinic.phone}`}
                  className="button button--outline-white"
                >
                  <Phone
                    size={19}
                    aria-hidden="true"
                  />
                  Call Us
                </a>
              )}

            </div>

          </div>

          <div
            className="final-cta__decoration"
            aria-hidden="true"
          >
            <div className="final-cta__circle final-cta__circle--one" />
            <div className="final-cta__circle final-cta__circle--two" />
            <div className="final-cta__circle final-cta__circle--three" />
          </div>

        </div>

      </div>
    </section>
  );
}