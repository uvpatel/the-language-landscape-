"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconLock, IconUser, IconArrowRight, IconAlertCircle } from "@tabler/icons-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please check credentials.");
        setIsLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F5EF] px-6 py-12">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#E6E0D5] bg-[#FBFAF6] shadow-sm">
            <Image
              src="/logo.png"
              alt="The Language Landscapes logo"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B32526]">
            Editorial Management
          </span>
          <h1 className="mt-2 font-serif text-3xl font-normal tracking-tight text-[#292624]">
            Sign in to TLL CMS
          </h1>
          <p className="mt-2 text-xs text-[#81766C]">
            Secure administrator gateway for blog creation and publishing.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-8 shadow-sm">
          {error && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-sm border border-[#B32526]/30 bg-[#B32526]/10 p-3.5 text-xs text-[#781E24]"
            >
              <IconAlertCircle size={18} className="mt-0.5 shrink-0 text-[#B32526]" />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]"
              >
                Username
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#81766C]">
                  <IconUser size={17} stroke={1.5} />
                </span>
                <input
                  id="username"
                  type="text"
                  required
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full rounded-sm border border-[#D9CFC2] bg-white py-2.5 pl-10 pr-3.5 text-sm text-[#292624] placeholder-[#A58B64]/50 outline-none transition-colors focus:border-[#B32526] focus:ring-1 focus:ring-[#B32526]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]"
              >
                Password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#81766C]">
                  <IconLock size={17} stroke={1.5} />
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-sm border border-[#D9CFC2] bg-white py-2.5 pl-10 pr-3.5 text-sm text-[#292624] placeholder-[#A58B64]/50 outline-none transition-colors focus:border-[#B32526] focus:ring-1 focus:ring-[#B32526]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-sm bg-[#B32526] py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#92211F] disabled:opacity-50"
            >
              <span>{isLoading ? "Verifying Credentials..." : "Authenticate"}</span>
              <IconArrowRight
                size={16}
                stroke={1.8}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>

        {/* Footer info */}
        <p className="mt-8 text-center text-[11px] text-[#81766C]">
          The Language Landscapes · Internal Editorial System
        </p>
      </div>
    </div>
  );
}
