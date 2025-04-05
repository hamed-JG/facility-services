import { useRouter } from "next/router";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

const Layout = ({ children, breadcrumbTitle = null }) => {
  const router = useRouter();
  const isLandingPage = router.pathname === "/";

  return (
    <ThemeProvider>
      <Header />
      {!isLandingPage && <Breadcrumb currentTitle={breadcrumbTitle} />}
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
