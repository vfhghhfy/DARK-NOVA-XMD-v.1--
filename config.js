const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  OWNER_NUM: process.env.OWNER_NUM || "967778668253",
  OWNER_NAME: process.env.OWNER_NAME || "دزاري",
  PRIFIX:process.env.PRIFIX || ".,/<>",
  ALIVE_IMG:process.env.AlIVE_IMG || "https://files.catbox.moe/80oe96.jpg",
  ALIVE_MSG:process.env.ALIVE_MSG || "I am Alive Now",
  AUTO_READ_STATUS:process.env.AUTO_READ_STATUS || "true",
  MODE:process.env.MODE || "public",//you can change it to (public,privet,group,inbox)
  GEMINI_API_KEY:process.env.GEMINI_API_KEY || "curl -s -X POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" -H "Content-Type: application/json" -H "X-goog-api-key: YOUR_API_KEY" -d '{"contents":[{"parts":[{"text":"Explain how AI works in a few words"}]}]}'",
  MOVIE_API_KEY:process.env.MOVIE_API_KEY || "sky|86a52d3b5912218993abe6bea34e0dd876d1010d"
};
