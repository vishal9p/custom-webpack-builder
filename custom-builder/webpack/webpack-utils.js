const getWebpackConfigSkeleton = require("./webpack-skeleton");
const path = require("path");

function getAllConfig(entry_map){
    const configArr = [];
    for(let i = 0; i < entry_map.length ; i++){
        const configParam = {
            entry : path.resolve(__dirname + "../../../", entry_map[i].entry),
            entryName: entry_map[i].output.fileName,
            buildDir: path.resolve(__dirname + "../../../", entry_map[i].output.buildDir)
        };
        configArr.push(getWebpackConfigSkeleton(configParam));
    }
    return configArr;
}

module.exports = getAllConfig;