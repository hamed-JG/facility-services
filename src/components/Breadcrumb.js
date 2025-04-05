import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Breadcrumb.module.css";

const Breadcrumb = ({ currentTitle }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);

  let breadcrumbs = [];

  if (pathSegments[0] === "product" && currentTitle) {
    breadcrumbs = [
      { label: "محصولات", href: "/products" },
      { label: currentTitle },
    ];
  } else if (pathSegments[0] === "products") {
    breadcrumbs = [{ label: "محصولات", href: "/products" }];
  }

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
