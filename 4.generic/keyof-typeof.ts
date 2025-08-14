const config = {
  api: "https://www.api.nutvahealth.uz",
  port: 443,
  debug: false,
};

type Config = typeof config;

type ConfigKeys = keyof Config;

const getConfigValue = <K extends ConfigKeys>(key: K): Config[K] => {
  return config[key];
};

// Example usage
const apiUrl = getConfigValue("api");
const apiPort = getConfigValue("port");
const isDebug = getConfigValue("debug");

console.log(`API URL: ${apiUrl}`); // Output: API URL: https://www.api.nutvahealth.uz
console.log(`API Port: ${apiPort}`); // Output: API Port: 443
console.log(`Debug Mode: ${isDebug}`); // Output: Debug Mode: false
