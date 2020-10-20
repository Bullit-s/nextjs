import Link from "next/link";
import { withTranslation, i18n } from "../core/i18n/i18n";
import styled from "astroturf";
import { Button } from "antd";
import { ProductsAsyncActions } from "../core/store/products/ProductsAsyncActions";
import { useSelector } from "react-redux";
import { productsDataSelector } from "../core/store/products/ProductsSelectors";

const IndexPage = ({ t }: any) => {
  const { data } = useSelector(productsDataSelector);
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
        <Link href="/page2">
          <CustomLink>{t("text")}</CustomLink>
        </Link>
      </p>
      {data?.product?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
  );
};

const CustomLink = styled.a`
  color: red;
`;

IndexPage.getInitialProps = async ({ store, req }: any) => {
  const { params } = store.getState().products;
  req
    ? await store.dispatch(ProductsAsyncActions.getProducts(params))
    : store.dispatch(ProductsAsyncActions.getProducts(params));

  return {
    namespacesRequired: ["common"],
  };
};

export default withTranslation(["common"])(IndexPage);
