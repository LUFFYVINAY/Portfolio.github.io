import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import biz4d from "./img/BIZ4D.png";
import desi from "./img/desi.png";
const Project = () => {
  const clients = [
    {
      img: biz4d,

      review:
        "Contributed to Developing the Mathematical and coding model for matching Algorithm . Testing scenarios for the matching algorithm ,adding criteria, and implementing the matching algorithm .Contributed to Software Development of the mentoring software in Suite CRM using PHP,MySql,and others.",
    },
    {
      img: desi,
      review:
        "Worked on the Design and Development part of a fully responsive webpage for a particular section of Desi QnA .Worked on User Verification/Authentication + Engineering challenges of detecting and removing the fake bots and posts. Integrated Recaptcha with the website - Google Layer of Protection for websites. Tech Stacks: HTML, CSS, JS, Bootstrap, PHP, MySQL.",
    },
  ];
  return (
    <div>
      <div className="wrapper" id="testimonial">
        <div className="heading">
          <span>Internships</span>
          <span>By me...</span>
          <div
            className="blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="t-testimonial">
                  <div>
                    <img src={client.img} alt="" />
                  </div>
                  <div>
                    <span>{client.review}</span>
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

export default Project;
