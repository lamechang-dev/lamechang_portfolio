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

const useStyles = makeStyles((theme: Theme) => ({
  summaryText: {
    padding: theme.spacing(2.5),
    textAlign: "center"
  },
  spacer: {
    marginBottom: theme.spacing(2)
  },
  lgSpacer: {
    marginBottom: theme.spacing(3)
  },
  xlSpacer: {
    marginBottom: theme.spacing(4)
  },
  year: {
    fontWeight: 700
  },
  largeAvatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    border: "solid 2px white",
    marginBottom: theme.spacing(4)
  },
  bioItemTitle: {
    fontSize: theme.spacing(1)
  },
  skillListContainer: {
    textAlign: "center"
  }
}));

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <MainContainer>
      <HeaderMenuBar className={classes.spacer} />
      <SummarySection className={classes.xlSpacer}>
        <Typography className={classes.summaryText} variant="body2">
          Hello, I’m Front-End Focused Software Enginner based in Tokyo, Japan!
        </Typography>
      </SummarySection>
      <ContentSection
        className={classes.xlSpacer}
        title="BIO"
        content={
          <>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Avatar
                  alt="Remy Sharp"
                  src="/img/portfolio.png"
                  className={classes.largeAvatar}
                />
              </Grid>
            </Grid>
            <Grid container direction="column">
              {BIO_ITEMS.map(bio => {
                return (
                  <Grid item>
                    <Typography
                      variant="body2"
                      className={clsx(classes.bioItemTitle)}
                    >
                      {bio.title}
                    </Typography>
                    {bio.href ? (
                      <TextLink
                        href={bio.href}
                        className={clsx(classes.spacer)}
                      >
                        {bio.value}
                      </TextLink>
                    ) : (
                      <Typography
                        variant="body2"
                        className={clsx(classes.spacer)}
                      >
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
        className={classes.lgSpacer}
        title="SKILLS"
        content={
          <>
            <Grid
              className={classes.skillListContainer}
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
