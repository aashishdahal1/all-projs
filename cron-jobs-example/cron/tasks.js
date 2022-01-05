const cron = require("node-cron");

module.exports = () => {
  cron.schedule("*/2 * * * * *", () => {
    console.log(new Date().toLocaleString());
  });
};
