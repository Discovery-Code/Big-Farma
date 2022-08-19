import "../../styles/globals.css";
import MainHeader from "../components/layout/MainHeader";

function MyApp({ Component, pageProps }) {
  return (
    <MainHeader>
      <Component {...pageProps} />
    </MainHeader>
  );
}

export default MyApp;
