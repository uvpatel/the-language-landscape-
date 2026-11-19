import { NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/admin/auth";

export async function GET() {
  const isAuthed = await isAuthenticatedAdmin();

  if (!isAuthed) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: {
      username: process.env.ADMIN_USERNAME || "admin",
      role: "administrator",
    },
  });
}
