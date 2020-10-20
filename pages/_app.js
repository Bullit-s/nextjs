import App from "next/app";
import "../common/styles/antd-style.less";
import "../common/styles/styles.css";
import { appWithTranslation } from "../core/i18n/i18n";
import { Provider } from "react-redux";
import { wrapper } from "../core/store/store";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default wrapper.withRedux(appWithTranslation(MyApp));
