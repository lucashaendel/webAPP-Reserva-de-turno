import React from "react";
import { Provider } from "react-redux";
import "../styles/base/global.scss";
import "../styles/style.scss";
import store from "../sate/store";
import { AuthProvider } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
     
    </Provider>
  );
}

export default MyApp;
