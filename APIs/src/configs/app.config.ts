require("dotenv").config();

export const port = process.env.PORT || 3030;
export const JWT_TOKEN = process.env.JWT_TOKEN || "thisisatestsecret";
