module.exports = {
  // target: "serverless",
  swcMinify: true,
  // bad that I need to do it, but I've wasted too much time on eslint already
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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
