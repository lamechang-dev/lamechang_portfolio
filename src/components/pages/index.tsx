import Image from "next/image";
import { NextPage } from "next";
import HeaderMenuBar from "src/components/ui/HeaderMenu";
import PageContainer from "src/components/ui/PageContainer";
import SummarySection from "src/components/ui/SummarySection/index";
import ContentSection from "src/components/ui/ContentSection";
import clsx from "clsx";
import { SKILL_LANGUAGES, BIO_ITEMS } from "src/domain/portfoilo/constants";
import { TextLink } from "src/components/ui/TextLink";
import { UserAvatar } from "../model/user/UserAvatar";
import { Typography } from "../ui/Typography";
import { FadeInImage } from "../ui/FadeInImage";

const TopPageComponent: NextPage = () => {
  return (
    <PageContainer>
      <HeaderMenuBar className={"mb-2"} />
      <SummarySection className={clsx("mb-4", "p-2", "mx-auto", "shadow-lg")}>
        <Typography variant="body2" className={"text-center"}>
          Hello, I’m Front-End Focused Software Enginner based in Tokyo, Japan!
        </Typography>
      </SummarySection>
      <ContentSection
        className={"p-4"}
        title="BIO"
        content={
          <>
            <div className={clsx("flex", "justify-center", "mb-2")}>
              <UserAvatar />
            </div>
            <div className={clsx("flex", "flex-col")}>
              {BIO_ITEMS.map((bio) => {
                return (
                  <div key={bio.title}>
                    <Typography variant="body2" className={clsx("text-[12px]")}>
                      {bio.title}
                    </Typography>
                    {bio.href ? (
                      <TextLink
                        href={bio.href}
                        className={clsx("mb-2", "inline-block")}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {bio.value}
                      </TextLink>
                    ) : (
                      <Typography variant="body2" className={clsx("mb-2")}>
                        {bio.value}
                      </Typography>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        }
      />
      <ContentSection
        className={"p-4"}
        title="SKILLS"
        content={
          <div
            className={clsx(
              "p-2",
              "content-center",
              "flex",
              "flex-col",
              "items-center"
            )}
          >
            <div className={clsx("grid", "grid-cols-4", "gap-8")}>
              {SKILL_LANGUAGES.map((skill) => (
                <div
                  key={skill.imageUrl}
                  className={clsx(
                    "text-center",
                    "shadow-lg",
                    "lt-sm:p-1",
                    "p-4",
                    "rounded-xl"
                  )}
                >
                  <FadeInImage
                    width="80"
                    height="80"
                    src={skill.imageUrl}
                    className="text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />
    </PageContainer>
  );
};

export default TopPageComponent;
