import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";

import SEO from "../components/common/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";

import DoctorCard from "../components/doctors/DoctorCard";

import { doctors } from "../data/doctors";
import { seo } from "../data/seo";

export default function Doctors() {
  return (
    <>
      <SEO
        title={seo.doctors.title}
        description={seo.doctors.description}
        path="/doctors"
      />

      <main className="doctors-page">

        {/* =================================================
            HERO
            ================================================= */}

        <section className="doctors-page__hero">
          <div className="container">

            <Breadcrumbs
              items={[
                {
                  label: "Doctors",
                  path: "/doctors",
                },
              ]}
            />

            <div className="doctors-page__hero-content">

              <span className="doctors-page__eyebrow">
                Our Doctors
              </span>

              <h1 className="doctors-page__title">
                Meet Our Dental Professionals
              </h1>

              <p className="doctors-page__description">
                Meet the dental professionals at Siddhartha
                Super Speciality Dental Hospital.
              </p>

            </div>

          </div>
        </section>

        {/* =================================================
            DOCTORS
            ================================================= */}

        <section className="section doctors-page__list">
          <div className="container">

            {doctors.length > 0 ? (
              <div className="doctors-page__grid">

                {doctors.map((doctor) => (
                  <DoctorCard
                    doctor={doctor}
                    key={doctor.id}
                  />
                ))}

              </div>
            ) : (
              <div className="doctors-page__empty">
                <p>
                  Doctor information will be available soon.
                </p>
              </div>
            )}

          </div>
        </section>

        {/* =================================================
            APPOINTMENT CTA
            ================================================= */}

        <section className="doctors-page__cta">
          <div className="container">

            <div className="doctors-page__cta-inner">

              <div className="doctors-page__cta-icon">
                <CalendarCheck
                  size={30}
                  aria-hidden="true"
                />
              </div>

              <div className="doctors-page__cta-content">

                <span>
                  Book an Appointment
                </span>

                <h2>
                  Ready to Discuss Your Dental Care?
                </h2>

                <p>
                  Contact Siddhartha Dental Hospital
                  to schedule your appointment.
                </p>

              </div>

              <Link
                to="/contact"
                className="button button--white"
              >
                Contact Us
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}