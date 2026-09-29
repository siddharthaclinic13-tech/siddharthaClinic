import {
  ArrowRight,
  CircleDot,
  Smile,
} from "lucide-react";

import { Link } from "react-router-dom";

const iconMap = {
  Tooth: CircleDot,
  CircleDot,
  Smile,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || CircleDot;

  return (
    <article className="service-card">

      <div className="service-card__image-wrapper">
        {service.image ? (
          <img
            src={service.image}
            alt={
              service.imageAlt ||
              service.title
            }
            className="service-card__image"
            loading="lazy"
          />
        ) : (
          <div
            className="service-card__image-placeholder"
            aria-hidden="true"
          >
            <Icon size={42} />
          </div>
        )}

        <div
          className="service-card__icon"
          aria-hidden="true"
        >
          <Icon size={22} />
        </div>
      </div>


      <div className="service-card__content">

        <h3 className="service-card__title">
          {service.title || "Dental Service"} 
        </h3>

        {service.shortDescription && (
          <p className="service-card__description">
            {service.shortDescription}
          </p>
        )}

        <Link
          to={`/services/${service.slug}`}
          className="service-card__link"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More

          <ArrowRight
            size={17}
            aria-hidden="true"
          />
        </Link>

      </div>

    </article>
  );
}