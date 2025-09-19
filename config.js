const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  OWNER_NUM: process.env.OWNER_NUM || "9470xxxxxxx",
  OWNER_NAME: process.env.OWNER_NAME || "ENTER YOUR NAME",
  PRIFIX:process.env.PRIFIX || ".,/<>",
  ALIVE_IMG:process.env.AlIVE_IMG || "https://files.catbox.moe/80oe96.jpg",
  ALIVE_MSG:process.env.ALIVE_MSG || "I am Alive Now!! 🤭💗 ආහ් පැටියෝ කොහොමද ?🌝",
  AUTO_READ_STATUS:process.env.AUTO_READ_STATUS || "true",
  MODE:process.env.MODE || "public",//you can change it to (public,privet,group,inbox)
};
