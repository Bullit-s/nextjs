import App from "next/app";
import "../common/styles/antd-style.less";
import "../common/styles/styles.css";
import { appWithTranslation } from "../i18n";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
