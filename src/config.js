// Create a new file called "config.js" and replace all the fields with your configuration

exports.telegramAPIToken = ""; // Your telegram bot API key. Ask the @botfather for an api key
exports.chatId = ""; // your telegram id. This will make sure that the msgs are sent only to you
exports.OTPsecret = ""; // run "npm run generate-password" in order to get this setting
exports.localNodeURL = "http://127.0.0.1:7000/api/node/status"; // If you want to use for testing "https://node04.lisk.io/api/loader/status/sync" or use your node in testnet, don't forget the port 7000
exports.diffBlockHeight = 2; // The difference of block heights between your node and the others before triggering an alarm
exports.minBlockHeightNodeMatch = -3; // The difference of block heights between your node and the others before triggering an alarm
exports.rebootWelcome = true; // The reboot telegram message

exports.publicKey = ""; // Public Key of your forging delegate

exports.executeBlockHeightsCron = true;
exports.executeServerStatusCron = false;
exports.cpuThreshold = 90; // Sends a notification to the user when cpu usage is over this %
exports.spaceUsageThreshold = 10; // Sends a notification to the user when total free disk space in under this %
exports.memoryThreshold = 90; // Sends a notification to the user when memory usage is over this %

exports.liskPWDFolder = "/home/lisk/lisk-test"; // the path of your lisk node

exports.remoteNodes = [
  {
    url: "https://testnet-wallet.lisknode.io/api/node/status",
    name: "gr33ndragon-wallet"
  },
  {
    url: "http://testnet-explorer.lisknode.io:7000/api/node/status",
    name: "gr33ndragon-BE"
  },
  {
    url: "https://testnet.lisk.io/api/node/status",
    name: "lisk-Node"
  }
];
