"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Typography } from "src/components/ui/Typography";
import { TypographyProps } from "@mui/material";

type Props = {
  text: string;
  maxLines?: 2 | 3 | 4 | 5;
  typographyProps?: TypographyProps;
};

const clampClassMap = {
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
} as const;

const CollapsibleText: React.FC<Props> = ({
  text,
  maxLines = 3,
  typographyProps,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClamped, setIsClamped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setIsClamped(el.scrollHeight > el.clientHeight);
  }, [text]);

  return (
    <div>
      <div
        ref={containerRef}
        className={clsx(!isExpanded && clampClassMap[maxLines])}
      >
        <Typography {...typographyProps}>{text}</Typography>
      </div>
      {(isClamped || isExpanded) && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className={clsx(
            "mt-1",
            "text-xs",
            "text-gray-400",
            "underline",
            "underline-offset-2",
            "cursor-pointer"
          )}
        >
          {isExpanded ? "閉じる" : "もっと見る"}
        </button>
      )}
    </div>
  );
};

export default CollapsibleText;
