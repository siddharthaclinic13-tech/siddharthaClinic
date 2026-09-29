import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { doctors } from "../../data/doctors";
import DoctorCard from "../doctors/DoctorCard";

export default function DoctorsSlider() {
  return (
    <div className="doctors-slider">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Keyboard,
          A11y,
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
        breakpoints={{
          768: {
            slidesPerView: 2,
          },

          1100: {
            slidesPerView: 3,
          },
        }}
        a11y={{
          enabled: true,
        }}
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <DoctorCard doctor={doctor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}