import Link from "next/link";
import { withTranslation, i18n } from "../i18n";
import styled from "astroturf";
import { Button } from "antd";

const IndexPage = ({ t }: any) => {
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
        <Link href="/about">
          <CustomLink>{t("text")}</CustomLink>
        </Link>
      </p>
    </>
  );
};

const CustomLink = styled.a`
  color: red;
`;

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation(["common"])(IndexPage);
