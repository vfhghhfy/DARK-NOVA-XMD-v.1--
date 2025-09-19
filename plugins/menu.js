const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `╭━━〔 🚀 *${config.BOT_NAME}* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 Owner : *${config.OWNER_NAME}*
┃◈┃• ⚙️ Prefix : *[${config.PREFIX}]*
┃◈┃• 🌐 Platform : *GITHUB*
┃◈┃• 📦 Version : *1.0*
┃◈┃• ⏱️ Runtime : *${runtime(process.uptime())}*
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷


╭━━〔 📥 *MAIN COMMANDS* 〕━━┈⊷
┃◈╭─────────────────·๏
|   | ▫️.alive
|   | ▫️.menu
|   | ▫️.ai <text>
|   | ▫️.system
|   | ▫️.owner
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷


╭━━〔 📥 *DOWNLOAD COMMANDS* 〕━━┈⊷
┃◈╭─────────────────·๏
|   | ▫️.song <text>
|   | ▫️.video <text>
|   | ▫️.fb <link>
|   | ▫️.movie <movie name>
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 📥 *OWNER COMMANDS* 〕━━┈⊷
┃◈╭─────────────────·๏
|   |  ▫️.restart
|   | ▫️.update
┃◈╰─────────────────┈⊷

╭━━〔 📥 *CONVERT COMMANDS* 〕━━┈⊷
┃◈╭─────────────────·๏
   | ▫️.sticker <reply img>
   | ▫️.img <reply sticker>
   | ▫️.tr <lang><text>
   | ▫️.tts <text>
┃◈╰─────────────────┈⊷

🥶MADE BY ALPHA X TEAM🥶

> DARK-NOVA-XMD MENU MASAGE
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/80oe96.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
