import { clinic } from "../data/clinic";

export function createWhatsAppUrl(message) {
  if (!clinic.whatsapp) {
    return "#";
  }

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${clinic.whatsapp}?text=${encodedMessage}`;
}

export function createAppointmentUrl() {
  const message = `Hello Siddhartha Dental Hospital,

I would like to book a dental appointment.

Name:
Preferred Date:
Preferred Time:
Treatment/Concern:`;

  return createWhatsAppUrl(message);
}