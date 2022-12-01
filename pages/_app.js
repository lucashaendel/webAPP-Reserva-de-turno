import React from "react";
import { Provider } from "react-redux";
import "../styles/base/global.scss";
import "../styles/style.scss";
import store from "../sate/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
