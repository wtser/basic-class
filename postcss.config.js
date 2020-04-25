module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      preserve: false,
      importFrom: "./root.css",
    },
    // "postcss-nested-import": {},
    // "postcss-url": {
    //   url: "inline",
    // },
    "postcss-for": {},
    "postcss-each": {},

    "postcss-extend": {},
    // "postcss-nested": {},
    // "postcss-will-change": {},
    // "postcss-color-function": {},
    // "postcss-calc": {},
  },
};
