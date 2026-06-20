"use client";

import Image from "next/legacy/image";
import { ComponentProps, useState } from "react";
import clsx from "clsx";

export const FadeInImage = ({
  className,
  onLoad,
  ...props
}: ComponentProps<typeof Image>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      alt={props.alt ?? ""}
      onLoad={(e) => {
        if (!e.currentTarget.src.startsWith("data:")) {
          setIsLoaded(true);
        }
        onLoad?.(e);
      }}
      className={clsx(
        "transition-opacity duration-1500 ease-in-out",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    />
  );
};
