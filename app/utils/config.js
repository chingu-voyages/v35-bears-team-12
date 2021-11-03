/**
 * Hold all the constants in this file
 */
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL
    : "https://api.chingu.io/api";
// : "http://localhost:3000";
