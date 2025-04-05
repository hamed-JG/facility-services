import { useState, useEffect } from "react";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [animate, setAnimate] = useState(false);

  const slides = [
    {
      title: "فروش آبگرمکن",
      description:
        "آبگرمکن‌های با کیفیت و قیمت مناسب. سفارش دهید و تجربه‌ای راحت داشته باشید.",
      image: "/images/water-heater.jpg", // مسیر درست بده
      buttonText: "مشاهده محصولات",
    },
    {
      title: "فروش کولر گازی",
      description:
        "کولرهای پرقدرت و با مصرف کم، بهترین انتخاب برای تابستان داغ.",
      image: "/images/air-conditioner.jpg",
      buttonText: "خرید کولر",
    },
    {
      title: "درخواست نصاب حرفه‌ای",
      description:
        "نصاب حرفه‌ای برای نصب و سرویس در محل. همین حالا درخواست دهید.",
      image: "/images/installer.jpg",
      buttonText: "درخواست نصاب",
    },
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        handleSlideChange((currentSlide + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovering, currentSlide, slides.length]);

  const handleSlideChange = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimate(true);
    }, 100); // تاخیر کوتاه برای ریست
  };

  return (
    <div className={styles.banner}>
      <div
        className={styles.slideWrapper}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className={styles.overlay}></div>

          <div
            className={`${styles.content} ${animate ? styles.fadeInUp : ""}`}
            key={currentSlide} // این تضمین می‌کنه کامپوننت ریست شه!
          >
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
            <button>{slides[currentSlide].buttonText}</button>
          </div>
        </div>

        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.indicator} ${
                currentSlide === index ? styles.active : ""
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
