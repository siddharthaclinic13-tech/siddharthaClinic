import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake } from "lucide-react";

import SEO from "../components/common/SEO";
import Breadcrumbs from "../components/common/Breadcrumbs";

import { clinic } from "../data/clinic";
import { seo } from "../data/seo";

export default function About() {
  const about = clinic.about;

  return (
    <>
      <SEO
        title={seo.about.title}
        description={seo.about.description}
        path="/about"
      />

      <main className="about-page">

        {/* =================================================
            PAGE HERO
            ================================================= */}

        <section className="about-page__hero">
          <div className="container">

            <Breadcrumbs
              items={[
                {
                  label: "About",
                  path: "/about",
                },
              ]}
            />

            <div className="about-page__hero-content">

              <span className="about-page__eyebrow">
                About Us
              </span>

              <h1 className="about-page__title">
                About {clinic.shortName}
              </h1>

              {about.introduction && (
                <p className="about-page__description">
                  {about.introduction}
                </p>
              )}

            </div>

          </div>
        </section>

        {/* =================================================
            INTRODUCTION
            ================================================= */}

        {about.introduction && (
          <section className="section about-page__introduction">
            <div className="container">

              <div className="about-page__content-grid">

                <div>
                  <span className="about-page__section-eyebrow">
                    Our Approach
                  </span>

                  <h2 className="about-page__section-title">
                    Dental Care With Patients at the Center
                  </h2>
                </div>

                <div>
                  <p>
                    {about.introduction}
                  </p>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* =================================================
            MISSION
            ================================================= */}

        {about.mission && (
          <section className="section about-page__mission">
            <div className="container">

              <div className="about-page__feature">

                <div className="about-page__feature-icon">
                  <HeartHandshake
                    size={32}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span className="about-page__section-eyebrow">
                    Our Mission
                  </span>

                  <h2 className="about-page__section-title">
                    Our Mission
                  </h2>

                  <p>
                    {about.mission}
                  </p>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* =================================================
            APPROACH + PATIENT CARE
            ================================================= */}

        {(about.approach || about.patientCare) && (
          <section className="section about-page__details">
            <div className="container">

              <div className="about-page__cards">

                {about.approach && (
                  <article className="about-page__card">
                    <span className="about-page__section-eyebrow">
                      Our Approach
                    </span>

                    <h2>
                      How We Care for Patients
                    </h2>

                    <p>
                      {about.approach}
                    </p>
                  </article>
                )}

                {about.patientCare && (
                  <article className="about-page__card">
                    <span className="about-page__section-eyebrow">
                      Patient Care
                    </span>

                    <h2>
                      Your Comfort Matters
                    </h2>

                    <p>
                      {about.patientCare}
                    </p>
                  </article>
                )}

              </div>

            </div>
          </section>
        )}

        {/* =================================================
            ENVIRONMENT
            ================================================= */}

        {about.environment && (
          <section className="section about-page__environment">
            <div className="container">

              <div className="about-page__environment-inner">

                <div>
                  <span className="about-page__section-eyebrow">
                    Our Environment
                  </span>

                  <h2 className="about-page__section-title">
                    A Welcoming Dental Environment
                  </h2>
                </div>

                <p>
                  {about.environment}
                </p>

              </div>

            </div>
          </section>
        )}

        {/* =================================================
            CTA
            ================================================= */}

        <section className="about-page__cta">
          <div className="container">

            <div className="about-page__cta-inner">

              <div>
                <span>
                  Siddhartha Dental Hospital
                </span>

                <h2>
                  Have Questions About Your Dental Care?
                </h2>
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