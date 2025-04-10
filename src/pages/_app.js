import Layout from "../components/Layout";
import { TitleProvider } from "@/context/TitleContext";
import StickyCTA from "@/components/StickyCTA";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TitleProvider>
      <Layout breadcrumbTitle={pageProps.breadcrumbTitle}>
        <Component {...pageProps} />
        <StickyCTA />
      </Layout>
    </TitleProvider>
  );
}
