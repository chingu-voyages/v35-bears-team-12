module.exports = {
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

    return config;
  },
};
