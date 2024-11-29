const { Telegraf } = require("telegraf");
const { Client } = require("brawl-api-wrapper");
require("dotenv").config();

const bot = new Telegraf(process.env.TG_BOT_TOKEN);
const bsClient = new Client(process.env.BRAWL_STARS_TOKEN);

// TODO: do /start command

bot.command("playerinfo", (ctx) => {
  ctx.reply("🔰 Напишите тег игрока, символ # необязателен");

  bot.on("message", async (ctx) => {
    const loadingMessage = await ctx.reply("Подождите...");

    try {
      const player = await bsClient.getPlayer(ctx.message.text);
      let msg = `${player.name}\n\nТрофеи: ${player.trophies}🏆\nПобеды 3 на 3: ${player["3vs3Victories"]}🏅\nПобеды в соло ШД: ${player.soloVictories}🏅\nПобеды в дуо ШД: ${player.duoVictories}🏅\n`;

      if (player.club === null) {
        msg += "Клуб: Игрок не состоит в клубе";
      } else {
        msg += `Клуб: ${player.club.name}(${player.club.tag})`;
      }

      await ctx.deleteMessage(loadingMessage.message_id);
      await ctx.reply(msg);
    } catch (err) {
      if (err.status === 404) {
        ctx.deleteMessage(loadingMessage.message_id);
        ctx.reply("🔰 Вы ввели не валидный тег игрока\n✨ Попробуйте ещё раз введя команду /playerinfo");
      }
    }
  });
});

bot.launch();
