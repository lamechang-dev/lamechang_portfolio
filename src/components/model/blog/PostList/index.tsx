import clsx from "clsx";
import { BlogPost } from "src/domain/blog/model";
import { TextLink } from "src/components/ui/TextLink";
import { Typography } from "src/components/ui/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentSection from "src/components/ui/ContentSection";

type Props = {
  title: string;
  posts: BlogPost[];
  readMoreHref: string;
};

export const PostList: React.FC<Props> = ({ title, posts, readMoreHref }) => {
  if (posts.length === 0) return null;

  return (
    <ContentSection
      className={"p-4 mt-6"}
      title={title}
      content={
        <div className={clsx("flex", "flex-col")}>
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                "group",
                "flex",
                "items-center",
                "justify-between",
                "gap-4",
                "px-3",
                "py-3",
                "rounded-lg",
                "transition-all",
                "duration-200",
                "hover:bg-black/5",
                "dark:hover:bg-white/5",
                "no-underline"
              )}
            >
              <div className={clsx("flex", "flex-col", "gap-1", "min-w-0")}>
                <Typography
                  variant="body2"
                  className={clsx("text-[14px]", "line-clamp-1", "font-medium")}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={clsx("text-[11px]")}
                  sx={{ opacity: 0.45 }}
                >
                  {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </Typography>
              </div>
              <ArrowForwardIcon
                className={clsx(
                  "flex-shrink-0",
                  "opacity-0",
                  "group-hover:opacity-100",
                  "translate-x-[-4px]",
                  "group-hover:translate-x-0",
                  "transition-all",
                  "duration-200"
                )}
                sx={{ fontSize: 16 }}
              />
            </a>
          ))}
          <div className={clsx("flex", "justify-end", "mt-2", "px-3")}>
            <TextLink
              href={readMoreHref}
              target="_blank"
              rel="noreferrer"
              className={clsx("text-[12px]")}
            >
              read more →
            </TextLink>
          </div>
        </div>
      }
    />
  );
};
