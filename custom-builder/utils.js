const fs = require('fs');

function parseBuildConfig(){
    const build_config = fs.readFileSync('build-config.json', {
        encoding: 'utf8'
      });
    return JSON.parse(build_config)['entry_map'];
}

module.exports = parseBuildConfig;