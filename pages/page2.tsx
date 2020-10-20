import Link from "next/link";
import { withTranslation, i18n } from "../core/i18n/i18n";
import styled from "astroturf";
import { Button } from "antd";
// import { ProductsAsyncActions } from "../core/store/products/ProductsAsyncActions";
// import { IProductsRequestParams } from "../interfaces/products/IProducts";
import { wrapper } from "../core/store/store";

const IndexPage = ({ t, props }: any) => {
  return (
    <>
      <h1>Hello Next.js 👋</h1>{" "}
      <Button
        type={"primary"}
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
        }
      >
        {t("change-locale")}
      </Button>
      <p>
        <Link href="/">
          <CustomLink>{t("text")}</CustomLink>
        </Link>
      </p>
    </>
  );
};

const CustomLink = styled.a`
  color: red;
`;

IndexPage.getInitialProps = wrapper.getServerSideProps(async () => {
  return {
    namespacesRequired: ["common"],
  };
});

export default withTranslation(["common"])(IndexPage);
