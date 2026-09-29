import { Star } from "lucide-react";

import { reviews } from "../../data/reviews";

export default function ReviewsSection() {
  if (!reviews.length) {
    return null;
  }

  return (
    <section
      className="section reviews-section"
      id="reviews"
    >
      <div className="container">

        <div className="reviews-section__header">

          <span className="reviews-section__eyebrow">
            Patient Reviews
          </span>

          <h2 className="reviews-section__title">
            What Our Patients Say
          </h2>

          <p className="reviews-section__description">
            Read feedback shared by our patients about their
            experience with our dental care.
          </p>

        </div>

        <div className="reviews-grid">

          {reviews.map((review) => (
            <article
              className="review-card"
              key={review.id}
            >

              <div
                className="review-card__rating"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map(
                  (_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  )
                )}
              </div>

              <blockquote className="review-card__text">
                “{review.review}”
              </blockquote>

              <div className="review-card__author">
                <span className="review-card__name">
                  {review.name}
                </span>

                {review.source && (
                  <span className="review-card__source">
                    {review.source}
                  </span>
                )}
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}