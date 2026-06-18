import HeaderMenuBar from "src/components/ui/HeaderMenu";
import PageContainer from "src/components/ui/PageContainer";
import ContentSection from "src/components/ui/ContentSection";
import clsx from "clsx";
import { BIO_ITEMS } from "src/domain/portfoilo/constants";
import { BlogPost } from "src/domain/blog/model";
import { TextLink } from "src/components/ui/TextLink";
import { UserAvatar } from "../model/user/UserAvatar";
import { Typography } from "../ui/Typography";
import { PostList } from "src/components/model/blog/PostList";

type Props = {
  blogPosts: BlogPost[];
  zennPosts: BlogPost[];
};

const TopPageComponent: React.FC<Props> = ({ blogPosts, zennPosts }) => {
  return (
    <PageContainer>
      <HeaderMenuBar className={"mb-2"} />

      {/* Hero */}
      <div className={clsx("py-10", "mb-6")}>
        <div className={clsx("flex", "items-center", "gap-3", "mb-3")}>
          <div
            className={clsx(
              "w-1",
              "h-8",
              "rounded-full",
              "bg-[#096c8b]",
              "flex-shrink-0"
            )}
          />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-comfortaa), cursive",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Ryosuke Yoshimoto
          </Typography>
        </div>
        <Typography
          variant="body1"
          className={clsx("ml-4", "mb-3")}
          sx={{ opacity: 0.7 }}
        >
          Software Engineer
        </Typography>
        <Typography
          variant="body2"
          className={clsx("ml-4")}
          sx={{ opacity: 0.5 }}
        >
          Hello, I&apos;m a software engineer based in Tokyo, Japan!
        </Typography>
      </div>

      {/* BIO */}
      <ContentSection
        className={"p-4"}
        title="BIO"
        content={
          <div className={clsx("flex", "gap-6", "items-start")}>
            <div className="flex-shrink-0">
              <UserAvatar className={clsx("w-20", "h-20")} />
            </div>
            <div className={clsx("flex", "flex-col", "gap-3")}>
              {BIO_ITEMS.map((bio) => (
                <div key={bio.title} className={clsx("flex", "items-baseline", "gap-3")}>
                  <Typography
                    variant="body2"
                    className={clsx("text-[11px]", "w-14", "flex-shrink-0")}
                    sx={{ opacity: 0.5 }}
                  >
                    {bio.title}
                  </Typography>
                  {bio.href ? (
                    <TextLink
                      href={bio.href}
                      className={clsx("inline-block")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {bio.value}
                    </TextLink>
                  ) : (
                    <Typography variant="body2">{bio.value}</Typography>
                  )}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* BLOG */}
      <PostList
        title="BLOG"
        posts={blogPosts}
        readMoreHref="https://lamechang-dev.hatenablog.com/"
      />

      {/* ZENN */}
      <PostList
        title="ZENN"
        posts={zennPosts}
        readMoreHref="https://zenn.dev/lamechang"
      />

      {/* SKILLS */}
      {/* <ContentSection
        className={"p-4"}
        title="SKILLS"
        content={
          <div className={clsx("grid", "grid-cols-4", "gap-4")}>
            {SKILL_LANGUAGES.map((skill) => (
              <div
                key={skill.imageUrl}
                className={clsx(
                  "flex",
                  "flex-col",
                  "items-center",
                  "gap-2",
                  "shadow-lg",
                  "p-3",
                  "rounded-xl"
                )}
              >
                <FadeInImage
                  width="64"
                  height="64"
                  src={skill.imageUrl}
                  className="text-white"
                />
                <Typography
                  variant="body2"
                  className={clsx("text-[10px]", "text-center")}
                  sx={{ opacity: 0.6 }}
                >
                  {skill.name}
                </Typography>
              </div>
            ))}
          </div>
        }
      /> */}
    </PageContainer>
  );
};

export default TopPageComponent;
