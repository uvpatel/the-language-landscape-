import React from "react";
import { redirect } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/admin/auth";
import AdminShell from "@/components/admin/AdminShell";

export const instant = false;

export const metadata = {
  title: "Admin Editorial CMS | The Language Landscapes",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthed = await isAuthenticatedAdmin();

  if (!isAuthed) {
    redirect("/admin/login");
  }

  return <AdminShell>{children}</AdminShell>;
}
