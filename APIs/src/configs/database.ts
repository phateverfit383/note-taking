require("dotenv").config();

export const mongoUri = process.env.MONGO_URI || "";

export const mongoConfig = {
  autoIndex: false,
};
