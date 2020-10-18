const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {};

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  ...withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.tsx$/,
        use: ["astroturf/loader"],
      });

      return config;
    },
  }),
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
