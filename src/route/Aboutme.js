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
            "By harnessing live user location and Google libraries, the platform’s integration of AR models ensures 95% accurate real-time weatherinformation, enhancing user experience an decision-making capabilitie",
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
            "A fully responsive platform, hosted by Streamlit Serve,boosting productivity by 30% and enhancing organization with 20% efficiency gains,30% increase in task completion rates and a 25% improvement in user satisfaction.",
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
            "This fully responsive website seamlessly integrates authentication, messaging, and visually captivating UI with ReactJS's Material UI, yielding a 95% efficiency boost in user engagement and a 30% reduction in loading time.",
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
            "platform optimizes fantasy sports engagement, boasting a 40% increase in user participation and a 25% enhancement in revenue generation.  resulting in a 30% rise in user retention and a 20% improvement in profitability",
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
                    <a href=" https://github.com/LUFFYVINAY?tab=repositories ">
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
