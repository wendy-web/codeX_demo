"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.pexels.com/photos/19145897/pexels-photo-19145897.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "洗护人员在宠物洗护台为卷毛犬清洗毛发",
    title: "洗浴护理区",
    text: "专业洗护人员分区清洁，控制水温并安抚宠物情绪。"
  },
  {
    src: "https://images.pexels.com/photos/6816848/pexels-photo-6816848.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "洗护人员在美容台为小型犬梳理毛发",
    title: "梳理美容区",
    text: "洗后分层梳毛，检查毛结并整理蓬松度。"
  },
  {
    src: "https://images.pexels.com/photos/19145886/pexels-photo-19145886.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "洗护人员在明亮门店内为宠物修剪面部毛发",
    title: "精修造型区",
    text: "面部、脚底和局部造型精修，让宠物舒适又清爽。"
  }
];

export default function ProcessCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  function showSlide(index: number) {
    setCurrent((index + slides.length) % slides.length);
  }

  return (
    <div className="process-carousel" aria-label="宠物洗护人员工作轮播图">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.src}>
            <img src={slide.src} alt={slide.alt} />
            <div className="carousel-caption">
              <strong>{slide.title}</strong>
              <span>{slide.text}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control prev"
        type="button"
        aria-label="上一张"
        onClick={() => showSlide(current - 1)}
      >
        ‹
      </button>
      <button
        className="carousel-control next"
        type="button"
        aria-label="下一张"
        onClick={() => showSlide(current + 1)}
      >
        ›
      </button>
      <div className="carousel-dots" aria-label="轮播图分页">
        {slides.map((slide, index) => (
          <button
            className={`carousel-dot${index === current ? " active" : ""}`}
            type="button"
            aria-label={`显示第 ${index + 1} 张`}
            key={slide.src}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
