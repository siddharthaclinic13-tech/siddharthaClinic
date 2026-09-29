import { MessageCircle, Phone } from "lucide-react";

import { clinic } from "../../data/clinic";
import { createAppointmentUrl } from "../../utils/whatsapp";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a href={`tel:${clinic.phone}`}>
        <Phone size={19} />
        <span>Call</span>
      </a>

      <a href={createAppointmentUrl()}>
        <MessageCircle size={19} />
        <span>WhatsApp Appointment</span>
      </a>
    </div>
  );
}