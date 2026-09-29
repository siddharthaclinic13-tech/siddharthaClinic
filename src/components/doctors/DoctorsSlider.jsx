import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";

import { doctors } from "../../data/doctors";
import DoctorCard from "./DoctorCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DoctorsSlider() {
  if (!doctors.length) {
    return null;
  }

  return (
    <section
      id="doctors"
      className="section doctors-section"
    >
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div className="doctors-section__header">

          <div>
            <span className="doctors-section__eyebrow">
              Our Dental Professionals
            </span>

            <h2 className="doctors-section__title">
              Meet Our Doctors
            </h2>

            <p className="doctors-section__description">
              Meet the dental professionals at
              Siddhartha Super Speciality Dental
              Hospital.
            </p>
          </div>

          <Link
            to="/doctors"
            className="text-link"
          >
            View All Doctors
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>


        {/* =====================================
            SLIDER
        ====================================== */}

        <div className="doctors-slider">

          <Swiper
            modules={[
              A11y,
              Keyboard,
              Navigation,
              Pagination,
            ]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: "Previous doctor",
              nextSlideMessage: "Next doctor",
              paginationBulletMessage:
                "Go to doctor {{index}}",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="doctors-slider__swiper"
          >

            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
}