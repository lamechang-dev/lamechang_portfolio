"use client";

import { Typography } from "@mui/material";
import React from "react";
import clsx from "clsx";

export type Props = {
  className?: string;
  title?: string;
  subActionText?: string;
  onClickSubActionText?: () => void;
  content: React.ReactNode;
};

const ContentSection: React.FC<Props> = ({
  className,
  title,
  content,
  subActionText,
  onClickSubActionText,
}) => {
  return (
    <div className={clsx(className)}>
      {(title || subActionText) && (
        <div className={clsx("flex items-end mb-4", "justify-between")}>
          {title && (
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-comfortaa), cursive",
                textUnderlineOffset: (theme) => theme.spacing(0.5) + "px",
              }}
            >
              {title}
            </Typography>
          )}
          {subActionText && (
            <div onClick={onClickSubActionText}>
              <Typography
                className={clsx(
                  "text-[12px]",
                  "cursor-pointer",
                  "hover:text-gray-300",
                  "transition-colors"
                )}
                variant="body1"
              >
                {subActionText}
              </Typography>
            </div>
          )}
        </div>
      )}
      <div>{content}</div>
    </div>
  );
};

export default ContentSection;
