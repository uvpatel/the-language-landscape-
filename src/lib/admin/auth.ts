import { cookies } from "next/headers";
import { connection } from "next/server";
import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "tll_admin_session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || "fallback_dev_secret_change_in_production";
  return secret;
}

/**
 * Creates a signed session token: "timestamp:signature"
 */
export function createSessionToken(): string {
  const timestamp = Date.now().toString();
  const secret = getSecret();
  const hmac = crypto.createHmac("sha256", secret).update(timestamp).digest("hex");
  return `${timestamp}:${hmac}`;
}

/**
 * Verifies a signed session token
 */
export function verifySessionToken(token: string): boolean {
  if (!token || !token.includes(":")) return false;

  const [timestampStr, signature] = token.split(":");
  const timestamp = parseInt(timestampStr, 10);

  if (isNaN(timestamp)) return false;

  // Check expiration (7 days)
  const now = Date.now();
  if (now - timestamp > SESSION_MAX_AGE * 1000 || timestamp > now + 60000) {
    return false;
  }

  const secret = getSecret();
  const expectedHmac = crypto.createHmac("sha256", secret).update(timestampStr).digest("hex");

  try {
    return crypto.timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expectedHmac, "hex"));
  } catch {
    return false;
  }
}

/**
 * Validates admin credentials against environment variables
 */
export function validateAdminCredentials(username?: string, password?: string): boolean {
  const envUser = process.env.ADMIN_USERNAME?.trim();
  const envPass = process.env.ADMIN_PASSWORD?.trim();

  if (!envUser || !envPass || !username || !password) {
    return false;
  }

  return username.trim() === envUser && password.trim() === envPass;
}

/**
 * Server-side check for admin session
 */
export async function isAuthenticatedAdmin(): Promise<boolean> {
  await connection();
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(ADMIN_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return false;
  }

  return verifySessionToken(sessionCookie.value);
}
