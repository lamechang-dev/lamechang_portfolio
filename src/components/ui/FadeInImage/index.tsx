import Image from "next/image";
import { ComponentProps, useState } from "react";
import clsx from "clsx";

export const FadeInImage = ({
  className,
  ...props
}: ComponentProps<typeof Image>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      onLoad={(e) => {
        // only fade in the actual image, not the blur placeholder
        if (e.currentTarget.src.startsWith("data:")) return;
        setIsLoaded(true);
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
