const fs = require('fs');

function parseBuildConfig(){
    const build_config = fs.readFileSync('build-config.json', {
        encoding: 'utf8'
      });
    return JSON.parse(build_config)['entry_map'];
}

function parseProcessArgs(argumentsArr, processArgsObj){
  for(let i = 0; i < argumentsArr.length; i++){
    const key = argumentsArr[i].split("=")[0];
    const value = argumentsArr[i].split("=")[1];
    switch(key){
      case "watch": 
      processArgsObj.isWatchEnable = value === "true" ? true : false;
      break;
    }
  }
}

module.exports = {
  parseBuildConfig,
  parseProcessArgs
};