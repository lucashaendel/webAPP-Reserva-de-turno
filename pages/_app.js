import "../styles/globals.css";
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
