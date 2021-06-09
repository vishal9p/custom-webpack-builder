// TODO : This file will only hold skeleton of configration
function getWebpackConfigSkeleton(configParam) {
  return {
    mode: "production",
    entry: {
      [configParam.entryName]: configParam.entry,
    },
    output: {
      path: configParam.buildDir,
      filename: '[name].bundle.js',
    }
  };
}

module.exports = getWebpackConfigSkeleton;