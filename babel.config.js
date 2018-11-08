module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      "@babel/env",
      {
        "targets": {
          "node": true
        },
        useBuiltIns: "usage",
      },
    ],
  ];

  const plugins = [  ];

  return {
    presets,
    plugins
  };
}
