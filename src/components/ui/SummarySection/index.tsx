"use client";

import { Box } from "@mui/material";
import React from "react";

export type Props = {
  className?: string;
  children: React.ReactNode;
};

const SummarySection: React.FC<Props> = ({ children, className }) => {
  return (
    <Box
      className={className}
      sx={{
        background: (theme) => theme.palette.background.paper,
        borderRadius: "24px",
        width: "85%",
      }}
    >
      {children}
    </Box>
  );
};

export default SummarySection;
