import {
  MdBuild,
  MdAttachMoney,
  MdFlashOn,
  MdVerifiedUser,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GiMechanicGarage } from "react-icons/gi";
import { FaHandshake, FaTools } from "react-icons/fa";
import styles from "../styles/Features.module.css";

const features = [
  {
    icon: <MdBuild className={styles.icon} />,
    title: "خدمات سریع در محل",
    desc: "تکنسین در کم‌ترین زمان کنار شماست.",
  },
  {
    icon: <BiSupport className={styles.icon} />,
    title: "پشتیبانی شبانه‌روزی",
    desc: "همیشه در دسترس، حتی روزهای تعطیل.",
  },
  {
    icon: <MdAttachMoney className={styles.icon} />,
    title: "قیمت مناسب",
    desc: "شفاف، منصفانه، بدون هزینه اضافی.",
  },
  {
    icon: <MdFlashOn className={styles.icon} />,
    title: "نصب فوری و تخصصی",
    desc: "سریع، ایمن و حرفه‌ای.",
  },
  {
    icon: <GiMechanicGarage className={styles.icon} />,
    title: "تکنسین‌های مجرب",
    desc: "با تجربه و آموزش‌دیده.",
  },
  {
    icon: <MdVerifiedUser className={styles.icon} />,
    title: "گارانتی خدمات",
    desc: "اطمینان خاطر پس از انجام کار.",
  },
  {
    icon: <FaHandshake className={styles.icon} />,
    title: "رضایت مشتریان",
    desc: "همیشه در اولویت ماست.",
  },
  {
    icon: <FaTools className={styles.icon} />,
    title: "تجهیزات حرفه‌ای",
    desc: "با ابزار دقیق و به‌روز خدمت می‌دهیم.",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.title}>چرا ما را انتخاب کنید؟</h2>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={`${styles.card} fadeInUp`}>
            {f.icon}
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
