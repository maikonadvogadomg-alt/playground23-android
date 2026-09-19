const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Sem monorepo — standalone
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "mjs",
  "cjs",
];

module.exports = config;