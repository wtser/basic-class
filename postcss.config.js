module.exports = {
  plugins: {
    "postcss-import": {},

    // "postcss-nested-import": {},
    // "postcss-url": {
    //   url: "inline",
    // },
    "postcss-for": {},
    "postcss-each": {},
    "postcss-preset-env": {
      stage: 1,
      preserve: false,
      importFrom: "./root.css",
    },
    "postcss-nested": {},

    "postcss-extend": {},
    // "postcss-will-change": {},
    // "postcss-color-function": {},
    // "postcss-calc": {},
  },
};
