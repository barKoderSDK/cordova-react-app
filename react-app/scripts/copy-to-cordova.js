const ncp = require('ncp').ncp;
const path = require('path');
const fs = require('fs');

const cordovaPluginsPath = path.join(__dirname, '..', '..', 'plugins', 'barkoder-cordova-plugin', 'www');
const reactPluginsPath = path.join(__dirname, '..', 'src', 'react_plugins', 'barkoder-cordova-plugin');

fs.mkdirSync(path.dirname(reactPluginsPath), { recursive: true });

// Copy the barkoder-cordova-plugin from Cordova plugins to React src/react_plugins
ncp(cordovaPluginsPath, reactPluginsPath, function (err) {
  if (err) {
    return console.error('Error copying barkoder-cordova-plugin:', err);
  }
  console.log('Successfully copied barkoder-cordova-plugin to React app.');
});
