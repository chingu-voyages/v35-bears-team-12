// const path = require("path");

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
// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     disable:
//       process.env.NODE_ENV === 'development' ||
//       process.env.NODE_ENV === 'preview' ||
//       process.env.NODE_ENV === 'production',
//     // delete two lines above to enable PWA in production deployment
//     // add your own icons to public/manifest.json
//     // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
//     dest: 'public',
//     register: true
//   },
//   target: 'serverless',
//   future: {
//     webpack5: true
//   }
// });
