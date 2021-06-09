const webpack = require("webpack");
const getAllConfig = require("./webpack/webpack-utils");
const parseBuildConfig = require("./utils");

function build(){
    const entryMapFromBuildConfig = parseBuildConfig();// read build-config and get Required data
    const multiWebpackConfigs= getAllConfig(entryMapFromBuildConfig);// get webpack config
    const compiler = webpack(multiWebpackConfigs);
    compiler.run((err, stats) => {
        process.stdout.write(stats.toString() + '\n');
        compiler.close((closeErr) => {
          // ...
        });
    });      
}

build();