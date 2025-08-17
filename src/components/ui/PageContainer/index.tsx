"use client";

import { Box } from "@mui/material";
import React from "react";
import { FooterSection } from "../FooterSection";

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        maxWidth: "720px",
        margin: "0 auto",
        paddingLeft: (theme) => theme.spacing(2),
        paddingRight: (theme) => theme.spacing(2),
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
      <FooterSection />
    </Box>
  );
};

export default PageContainer;
