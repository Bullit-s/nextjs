import Link from "next/link";
import { withTranslation, i18n } from "../i18n";
import styled from "astroturf";

const IndexPage = ({ t }: any) => {
  return (
    <>
      <h1>Hello Next.js 👋</h1>{" "}
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
        }
      >
        {t("change-locale")}
      </button>
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
