import "@/styles/globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Replace 'G-XXXXXXXXXX' with your actual Measurement ID */}
      <GoogleAnalytics measurementId="G-117CSC6DX4" />
      <Component {...pageProps} />
    </>
  );
}
