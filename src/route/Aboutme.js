import React, { useRef } from "react";
import "./Aboutme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Typical from "react-typical";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import weather from "./img/weather.png";
import search from "./img/search.png";
import ai from "./img/ai.png";
import cart from "./img/cart.png";

const Aboutme = () => {
  const clients = [
    {
      img: weather,
      Headers: "Weather-forecast",
      review: (
        <Typical
          key={1} // Add key prop here
          loop={Infinity}
          steps={[
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed",
            1000,
          ]}
        />
      ),
    },
    {
      img: search,
      Headers: "AutoMated-Text Analysis",
      review: (
        <Typical
          key={2} // Add key prop here
          loop={Infinity}
          steps={[
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed",
            1000,
          ]}
        />
      ),
    },
    {
      img: cart,
      Headers: "Ecommerce",
      review: (
        <Typical
          key={3} // Add key prop here
          loop={Infinity}
          steps={[
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed",
            1000,
          ]}
        />
      ),
    },
    {
      img: ai,
      Headers: "Gaming-Arena",
      review: (
        <Typical
          key={4} // Add key prop here
          loop={Infinity}
          steps={[
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed",
            1000,
          ]}
        />
      ),
    },
  ];

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    // Restart animation for the current testimonial
    const currentSlide = swiperRef.current.swiper.realIndex;
    const textElement = document.querySelector(
      `.swiper-slide[data-swiper-slide-index="${currentSlide}"] .testimonial-text`
    );
    if (textElement) {
      textElement.scrollTop = 4;
    }
  };

  return (
    <div>
      <div className="t-wrapper" id="testimonial">
        <div className="t-heading">
          <span>Recent Exceptional Work</span>
          <span>from me...</span>
          <div
            className="blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index} className="testimonial-slide">
                <div className="testimonial">
                  <div>
                    <a href=" # ">
                      <button className="btn highlighted-text">
                        <p>code</p>
                      </button>
                    </a>
                  </div>
                  <div className="test-l">
                    <span>{client.Headers}</span>
                    <span className="testimonial-text">{client.review}</span>
                  </div>

                  <div className="test-2">
                    <img src={client.img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Aboutme;
