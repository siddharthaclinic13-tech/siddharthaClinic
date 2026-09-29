export function getServiceBySlug(
  services,
  slug
) {
  return services.find(
    (service) => service.slug === slug
  );
}

export function getFeaturedServices(
  services
) {
  return services.filter(
    (service) => service.featured
  );
}

export function getDoctorById(
  doctors,
  doctorId
) {
  return doctors.find(
    (doctor) => doctor.id === doctorId
  );
}