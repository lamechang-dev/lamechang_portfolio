"use client";

import React, { useState } from "react";
import clsx from "clsx";
import PageContainer from "src/components/ui/PageContainer";
import ContentSection from "src/components/ui/ContentSection";
import { Typography } from "src/components/ui/Typography";

const LoginPageComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ログインボタンが押されました\nemail: ${email}`);
  };

  return (
    <PageContainer>
      <ContentSection
        className="p-4"
        title="Login"
        content={
          <form onSubmit={handleSubmit} className={clsx("flex", "flex-col", "gap-4")}>
            <div className={clsx("flex", "flex-col", "gap-1")}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Email
              </Typography>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={clsx(
                  "w-full",
                  "px-3",
                  "py-2",
                  "rounded-md",
                  "border",
                  "border-gray-600",
                  "bg-transparent",
                  "text-sm",
                  "outline-none",
                  "focus:border-[#096c8b]"
                )}
              />
            </div>
            <div className={clsx("flex", "flex-col", "gap-1")}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Password
              </Typography>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={clsx(
                  "w-full",
                  "px-3",
                  "py-2",
                  "rounded-md",
                  "border",
                  "border-gray-600",
                  "bg-transparent",
                  "text-sm",
                  "outline-none",
                  "focus:border-[#096c8b]"
                )}
              />
            </div>
            <button
              type="submit"
              className={clsx(
                "mt-2",
                "px-4",
                "py-2",
                "rounded-md",
                "bg-[#096c8b]",
                "text-white",
                "text-sm",
                "font-medium",
                "hover:opacity-80",
                "transition"
              )}
            >
              ログイン
            </button>
          </form>
        }
      />
    </PageContainer>
  );
};

export default LoginPageComponent;
