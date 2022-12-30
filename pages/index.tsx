import Head from "next/head";
import Image from "next/image";
import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import LightButton from "components/atoms/LightButton/index";
import HeaderMenuBar from "components/organisms/HeaderMenu";
import MainContainer from "components/layout/MainContainer";
import SummarySection from "../components/organisms/SummarySection/index";
import ContentSection from "components/organisms/ContentSection";
import SkillImage from "components/atoms/SkillImage";
import YearData from "components/molecules/YearData";
import clsx from "clsx";
import { SKILL_LANGUAGES, BIO_ITEMS } from "../constants/portfolio/index";
import { TextLink } from "components/atoms/TextLink";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <HeaderMenuBar className={"mb-2"} />
      <SummarySection className={clsx("mb-4", "p-2", "self-center")}>
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
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Avatar alt="Ryosuke Yoshimoto" src="/img/portfolio.png" />
              </Grid>
            </Grid>
            <Grid container direction="column">
              {BIO_ITEMS.map(bio => {
                return (
                  <Grid item>
                    <Typography variant="body2" className={clsx("text-[12px]")}>
                      {bio.title}
                    </Typography>
                    {bio.href ? (
                      <TextLink
                        variant="body2"
                        href={bio.href}
                        className={clsx("mb-2")}
                        target="_blank"
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
        className={"mb-4"}
        title="SKILLS"
        content={
          <>
            <Grid
              className={"p-2"}
              container
              alignContent="center"
              direction="column"
              alignItems="center"
            >
              <Grid item container spacing={2}>
                {SKILL_LANGUAGES.map(skill => (
                  <Grid item xs={4}>
                    <Image width="80" height="80" src={skill.imageUrl} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        }
      />
    </MainContainer>
  );
};

export default Home;
