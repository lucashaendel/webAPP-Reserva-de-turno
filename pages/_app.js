import { AuthProvider } from "../context/authContext";
import "../styles/base/global.scss";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
