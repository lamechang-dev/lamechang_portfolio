import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";
import { NextPage } from "next";
import HeaderMenuBar from "src/components/ui/HeaderMenu";
import PageContainer from "src/components/ui/PageContainer";
import SummarySection from "src/components/ui/SummarySection/index";
import ContentSection from "src/components/ui/ContentSection";
import clsx from "clsx";
import { SKILL_LANGUAGES, BIO_ITEMS } from "src/domain/portfoilo/constants";
import { TextLink } from "src/components/ui/TextLink";
import { UserAvatar } from "../model/user/UserAvatar";

const TopPageComponent: NextPage = () => {
  return (
    <PageContainer>
      <HeaderMenuBar className={"mb-2"} />
      <SummarySection className={clsx("mb-4", "p-2", "mx-auto")}>
        <Typography variant="body2" className={"text-center"}>
          Hello, I’m Front-End Focused Software Enginner based in Ishikawa,
          Japan!
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
          <Grid
            className={"p-2"}
            container
            alignContent="center"
            direction="column"
            alignItems="center"
          >
            <Grid item container spacing={2}>
              {SKILL_LANGUAGES.map((skill) => (
                <Grid
                  item
                  xs={4}
                  key={skill.imageUrl}
                  className={"text-center"}
                >
                  <Image width="80" height="80" src={skill.imageUrl} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        }
      />
    </PageContainer>
  );
};

export default TopPageComponent;
