"use client";

import React from "react";
import { createStore, Provider as JotaiProvider } from "jotai";
import PageTemplate from "src/components/ui/PageTemplate";
import Seo from "src/lib/seo";
import { comfortaa, roboto } from "styles/fonts";
import "tailwind/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = createStore();

  return (
    <html lang="en" className={`${comfortaa.variable} ${roboto.variable}`}>
      <head>
        <Seo pageImg="https://lamechang-dev.vercel.app/ogp.jpg" />
      </head>
      <body>
        <JotaiProvider store={store}>
          <PageTemplate>{children}</PageTemplate>
        </JotaiProvider>
      </body>
    </html>
  );
}
