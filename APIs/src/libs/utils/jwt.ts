import * as jwt from "jsonwebtoken";

export const verifyToken = (
  token: string,
  secret?: string,
  options: jwt.VerifyOptions = {}
) => {
  try {
    const data = jwt.verify(token, secret || "thisisatestsecret", options);
    return { success: true, data };
  } catch (e) {
    return { success: false };
  }
};
