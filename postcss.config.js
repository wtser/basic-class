module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-nested-import": {},
    "postcss-url": {
      url: "inline",
    },
    "postcss-for": {},
    "postcss-each": {},
    "postcss-preset-env": {
      stage: 1,
      preserve: false,
      importFrom: "./root.css",
    },
    "postcss-nested": {},
    "postcss-will-change": {},
    "postcss-color-function": {},
    "postcss-calc": {},
    "postcss-apply-class": {},
    cssnano: {
      preset: [
        "default",
        {
          normalizeUrl: false,
        },
      ],
    },
  },
};
