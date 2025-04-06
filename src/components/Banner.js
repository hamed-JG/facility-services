import { useState, useEffect } from "react";
import styles from "../styles/Banner.module.css";
import Link from "next/link";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      title: "فروش آبگرمکن",
      description:
        "آبگرمکن‌های با کیفیت و قیمت مناسب، سفارش دهید و تجربه‌ای راحت داشته باشید",
      imageDesktop: "/images/boilerWideBanner.png",
      imageMobile: "/images/boilerMobileBanner.png",
      buttonText: "مشاهده محصولات",
      link: "/products",
    },
    {
      title: "فروش کولرآبی",
      description:
        "کولرهای پرقدرت و با مصرف کم، بهترین انتخاب برای تابستان داغ",
      imageDesktop: "/images/coolerWideBanner.png",
      imageMobile: "/images/coolerMobileBanner.png",
      buttonText: "خرید کولر",
      link: "/products",
    },
    {
      title: "درخواست نصاب حرفه‌ای",
      description:
        "نصاب حرفه‌ای برای نصب و سرویس در محل، همین حالا درخواست دهید",
      imageDesktop: "/images/technicianWideBanner.png",
      imageMobile: "/images/technicianMobileBanner.png",
      buttonText: "درخواست نصاب",
      link: "/contact",
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
    }, 100);
  };

  const currentImage = isMobile
    ? slides[currentSlide].imageMobile
    : slides[currentSlide].imageDesktop;

  return (
    <div className={styles.banner}>
      <div
        className={styles.slideWrapper}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <div className={styles.overlay}></div>

          <div
            className={`${styles.content} ${animate ? styles.fadeInUp : ""}`}
            key={currentSlide}
          >
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
            <Link href={`${slides[currentSlide].link}`}>
              <button>{slides[currentSlide].buttonText}</button>
            </Link>
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
