import Link from "next/link";
import { useRouter } from "next/router";
import { useTitle } from "../context/TitleContext";
import styles from "../styles/Breadcrumb.module.css";

const pathLabels = {
  products: "محصولات",
  services: "خدمات",
  contact: "تماس با ما",
  blog: "مقالات",
  expand: "مطالب آموزشی",
  about: "درباره ما",
};

const Breadcrumb = () => {
  const { pageTitle } = useTitle();
  const router = useRouter();
  const pathSegments = router.asPath.split("?")[0].split("/").filter(Boolean);

  // اگر در صفحه خانه هستیم یا هیچ مسیر مشخصی نداریم، چیزی نمایش نده
  if (pathSegments.length === 0) return null;

  const breadcrumbs = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    const isDynamic = !pathLabels[segment] && isLast && pageTitle;

    return {
      label: pathLabels[segment] || (isLast && pageTitle ? pageTitle : segment),
      href: !isLast ? href : null,
    };
  });

  return (
    <nav className={styles.breadcrumb}>
      <ul>
        <li>
          <Link href="/">خانه</Link>
        </li>
        {breadcrumbs.map((crumb, i) => (
          <li key={i}>
            {crumb.href ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
