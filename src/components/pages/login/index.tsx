"use client";

import React, { Suspense } from "react";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import PageContainer from "src/components/ui/PageContainer";
import ContentSection from "src/components/ui/ContentSection";
import { Typography } from "src/components/ui/Typography";
import { createClient } from "src/data/adapters/supabase/client";

const ERROR_MESSAGES: Record<string, string> = {
  unauthorized: "このアカウントはログインが許可されていません。",
  auth_failed: "認証に失敗しました。もう一度お試しください。",
  missing_code: "認証コードが見つかりません。もう一度お試しください。",
  no_email: "メールアドレスを取得できませんでした。",
};

const handleGoogleLogin = async () => {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
};

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams();
  const errorKey = searchParams?.get("error");
  const errorMessage = errorKey ? ERROR_MESSAGES[errorKey] : null;

  return (
    <div className={clsx("flex", "flex-col", "gap-4")}>
      {errorMessage && (
        <Typography variant="body2" sx={{ color: "#e57373" }}>
          {errorMessage}
        </Typography>
      )}
      <button
        onClick={handleGoogleLogin}
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "gap-2",
          "px-4",
          "py-2",
          "rounded-md",
          "border",
          "border-gray-600",
          "bg-transparent",
          "text-sm",
          "font-medium",
          "hover:opacity-80",
          "transition"
        )}
      >
        <GoogleIcon />
        Googleでログイン
      </button>
    </div>
  );
};

const LoginPageComponent: React.FC = () => {
  return (
    <PageContainer>
      <ContentSection
        className="p-4"
        title="Login"
        content={
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        }
      />
    </PageContainer>
  );
};

const GoogleIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      fill="#4285F4"
    />
    <path
      d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      fill="#34A853"
    />
    <path
      d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      fill="#FBBC05"
    />
    <path
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      fill="#EA4335"
    />
  </svg>
);

export default LoginPageComponent;
