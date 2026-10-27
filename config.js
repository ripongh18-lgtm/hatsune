const isTrue = (x) => x === "true" || x === true;

export default {
  // General Config
  GROUP_LINKS: [],
  prefix: ".",
  DATABASE_URL: process.env.DATABASE_URL || "",
  BOT_NAME: process.env.BOT_NAME || "STARK-MD",
  packname: process.env.PACKNAME || "bot",
  author: process.env.AUTHOR || "STARK-MD",
  THEME: process.env.THEME || "t",
  giftname: "STARK-MD",
  TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN || "",
  TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL || "",
  // Telegram Group Config
  ALLOWED_GROUP_ID: Number(process.env.TG_GROUP_ID) || -1003718062610,
  GROUP_INVITE_LINK: process.env.TG_GROUP_LINK || "https://t.me/uwfaajv ",
  // WhatsApp Channel Config
  WA_CHANNEL_LINK:
    process.env.WA_CHANNEL_LINK ||
    "https://whatsapp.com/channel/0029Vb9VYjd545upIqpKzY0r",
  // Pairing Config
  PAIR_COOLDOWN_MS: 30_000,
  // Telegram Bot Token
  BOT_TOKEN: process.env.BOT_TOKEN || "8872703709:AAHfp9D7H3iPWK9YMfhprYTbsPoGFt3nMLY",
};
