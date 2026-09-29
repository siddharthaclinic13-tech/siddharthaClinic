import {
  Phone,
  MessageCircle,
} from "lucide-react";

import { clinic } from "../../data/clinic";
import { createAppointmentUrl } from "../../utils/whatsapp";

export default function MobileCTA() {
  const appointmentUrl = createAppointmentUrl();

  /*
    Don't render the entire component if
    neither phone nor WhatsApp is available.
  */
  if (!clinic.phone && !appointmentUrl) {
    return null;
  }

  return (
    <div
      className="mobile-cta"
      aria-label="Quick contact actions"
    >
      <div className="mobile-cta__inner">

        {clinic.phone && (
          <a
            href={`tel:${clinic.phone}`}
            className="mobile-cta__button mobile-cta__button--call"
          >
            <Phone
              size={19}
              aria-hidden="true"
            />

            <span>Call</span>
          </a>
        )}

        {appointmentUrl && (
          <a
            href={appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta__button mobile-cta__button--whatsapp"
          >
            <MessageCircle
              size={19}
              aria-hidden="true"
            />

            <span>WhatsApp Appointment</span>
          </a>
        )}

      </div>
    </div>
  );
}