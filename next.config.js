const withCSS = require("@zeit/next-css");
const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {};

module.exports = withCSS({
  cssModules: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: ["astroturf/loader"],
    });

    return config;
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
