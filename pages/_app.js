import "../styles/base/global.scss";
import "../styles/style.scss";
// import Navbar from "../../comps/Navbar";
// <Navbar />

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
