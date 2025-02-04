const ncp = require('ncp').ncp;
const path = require('path');

const source = path.join(__dirname, '../build'); // React build folder
const destination = path.join(__dirname, '../..', 'www'); // Cordova www folder

// Copy the build folder to Cordova www
ncp(source, destination, function (err) {
  if (err) {
    return console.error('Error copying build to Cordova www:', err);
  }
  console.log('Successfully copied build to Cordova www folder!');
});
