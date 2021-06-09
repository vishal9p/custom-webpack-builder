const webpack = require("webpack");
const getAllConfig = require("./webpack/webpack-utils");
const utilsModule = require("./utils");

const processArgs = {
  isWatchEnable: false
};
const requiredGlobalConst = {
  'a': 'a'
};

function build() {
  utilsModule.parseProcessArgs(process.argv.slice(2), processArgs);// process all the cmd args e.g enable watch
  const entryMapFromBuildConfig = utilsModule.parseBuildConfig();// read build-config and get Required data
  const multiWebpackConfigs = getAllConfig(entryMapFromBuildConfig);// get webpack config
  const compiler = webpack(multiWebpackConfigs);
  // run or watch 
  if (processArgs.isWatchEnable) {
    const watching = compiler.watch({
      // Example [watchOptions](/configuration/watch/#watchoptions)
      aggregateTimeout: 300,
      poll: undefined
    }, (err, stats) => { // [Stats Object](#stats-object)
      // Print watch/build result here...
      console.log(stats);
      // we can use any global const from above call
      console.log("=== Global const ===",requiredGlobalConst);
    });
  } else {
    compiler.run((err, stats) => {
      process.stdout.write(stats.toString() + '\n');
      compiler.close((closeErr) => {
        // ...
      });
    });
  }
}

build();