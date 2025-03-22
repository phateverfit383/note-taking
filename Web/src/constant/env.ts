export const isProd = process.env.NODE_ENV === "production";
export const isLocal = process.env.NODE_ENV === "development";

export const showLogger = isLocal ? true : false;

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3344";
