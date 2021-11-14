
module.exports = {
  // target: "serverless",
  webpack: function (config, options) {
    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      ...config.resolve.fallback,
      fs: false,
    };
    // config.resolve = {
    //   ...config.resolve,
    //   alias: {
    //     "@components": path.resolve(__dirname, "..", "app", "components"),
    //     "@sections": path.join(
    //       __dirname,
    //       "..",
    //       "app",
    //       "components",
    //       "sections"
    //     ),
    //     "@icons": path.resolve(__dirname, "..", "app", "components", "icons"),
    //     "@content": path.resolve(__dirname, "..", "app", "content"),
    //     "@layouts": path.resolve(__dirname, "..", "app", "layouts"),
    //     "@styles": path.resolve(__dirname, "..", "app", "styles"),
    //     "@utils": path.resolve(__dirname, "..", "app", "utils"),
    //     "@hooks": path.resolve(__dirname, "..", "app", "hooks"),
    //     "@context": path.resolve(__dirname, "..", "app", "context"),
    //     "@lib": path.resolve(__dirname, "..", "app", "lib"),
    //   },
    // };
    return config;
  },
};