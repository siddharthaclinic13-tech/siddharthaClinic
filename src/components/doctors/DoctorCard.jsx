import { GraduationCap, BriefcaseMedical } from "lucide-react";

export default function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card">

     <div className="doctor-card__image-wrapper">
  {doctor.image ? (
    <img
      src={doctor.image}
      alt={doctor.imageAlt || doctor.name}
      className="doctor-card__image"
      loading="lazy"
    />
  ) : (
    <div
      className="doctor-card__image-placeholder"
      aria-hidden="true"
    >
      Doctor
    </div>
  )}
</div>

      <div className="doctor-card__content">

        <h3 className="doctor-card__name">
          {doctor.name}
        </h3>

        {doctor.qualification && (
          <div className="doctor-card__meta">
            <GraduationCap
              size={17}
              aria-hidden="true"
            />

            <span>
              {doctor.qualification}
            </span>
          </div>
        )}

        {doctor.specialization && (
          <div className="doctor-card__meta">
            <BriefcaseMedical
              size={17}
              aria-hidden="true"
            />

            <span>
              {doctor.specialization}
            </span>
          </div>
        )}

        {doctor.experience && (
          <p className="doctor-card__experience">
            {doctor.experience}
          </p>
        )}

        {doctor.description && (
          <p className="doctor-card__description">
            {doctor.description}
          </p>
        )}

      </div>
    </article>
  );
}