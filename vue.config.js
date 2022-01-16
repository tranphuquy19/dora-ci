// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

console.log("Starting server in " + process.env.VUE_APP_NODE_ENV + " mode");

module.exports = {
  transpileDependencies: ["vuetify"],
};
