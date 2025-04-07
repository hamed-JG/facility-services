import {
  MdPlumbing,
  MdOutlineElectricalServices,
  MdOutlineCleaningServices,
  MdLocalShipping,
} from "react-icons/md";
import { GiWaterDrop, GiToolbox } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaTools } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import styles from "../styles/Services.module.css";

const services = [
  {
    icon: <TbAirConditioning className={styles.icon} />,
    title: "نصب کولر آبی",
    description: "نصب سریع و استاندارد انواع کولر آبی در محل شما.",
  },
  {
    icon: <GiWaterDrop className={styles.icon} />,
    title: "تعمیر آبگرمکن",
    description: "تعمیر تخصصی انواع آبگرمکن دیواری و ایستاده.",
  },
  {
    icon: <MdPlumbing className={styles.icon} />,
    title: "لوله‌کشی و نشتی‌گیری",
    description: "بررسی نشتی و خدمات لوله‌کشی فوری.",
  },
  {
    icon: <MdOutlineElectricalServices className={styles.icon} />,
    title: "برق‌کاری سبک",
    description: "رفع اتصالی، نصب کلید و پریز، ایمن‌سازی سیم‌کشی.",
  },
  {
    icon: <GiToolbox className={styles.icon} />,
    title: "سرویس کامل کولر",
    description: "شستشو، روغن‌کاری و تنظیم عملکرد فصلی کولرها.",
  },
  {
    icon: <FaTools className={styles.icon} />,
    title: "عیب‌یابی تجهیزات",
    description: "بررسی دقیق و ارائه راه‌حل فوری برای ایرادات فنی.",
  },
  {
    icon: <MdLocalShipping className={styles.icon} />,
    title: "ارسال و نصب فوری",
    description: "ارسال محصول و نصب همزمان برای راحتی شما.",
  },
  {
    icon: <MdOutlineCleaningServices className={styles.icon} />,
    title: "شستشوی تخصصی",
    description: "شستشوی حرفه‌ای رادیاتور، پکیج و کولر بدون آسیب.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>خدمات ما</h2>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div key={i} className={`${styles.card} fadeInUp`}>
            {s.icon}
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <div className={styles.CTAContainer}>
              <a
                href={`https://wa.me/+989194883039?text=${encodeURIComponent(
                  s.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta1}
              >
                درخواست خدمت
              </a>
              <a
                href={`https://wa.me/+989194883039?text=${encodeURIComponent(
                  s.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta2}
              >
                <IoIosCall />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
