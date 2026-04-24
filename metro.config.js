const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// Fetch the default Expo Metro configuration for the current project directory
const config = getDefaultConfig(__dirname)

/* Wraps the standard Metro config with NativeWind 
  to link your global CSS file for styling processing
*/
module.exports = withNativeWind(config, { input: './global.css' })