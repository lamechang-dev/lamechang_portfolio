import Image from "next/image";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { NextPage } from "next";
import HeaderMenuBar from "src/components/organisms/HeaderMenu";
import MainContainer from "src/components/layout/MainContainer";
import SummarySection from "../src/components/organisms/SummarySection/index";
import ContentSection from "src/components/organisms/ContentSection";
import clsx from "clsx";
import { SKILL_LANGUAGES, BIO_ITEMS } from "src/constants/portfolio/index";
import { TextLink } from "src/components/atoms/TextLink";

const Home: NextPage = () => {
  return (
    <MainContainer>
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
              <Grid item>
                <Avatar
                  alt="Ryosuke Yoshimoto"
                  src="/img/portfolio.png"
                  className={clsx("w-16", "h-16", "border-white", "border-2")}
                />
              </Grid>
            </div>
            <Grid container direction="column">
              {BIO_ITEMS.map((bio) => {
                return (
                  <Grid item key={bio.title}>
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
                  </Grid>
                );
              })}
            </Grid>
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
    </MainContainer>
  );
};

export default Home;
