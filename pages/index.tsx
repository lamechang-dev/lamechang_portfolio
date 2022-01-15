import Head from "next/head";
import Image from "next/image";
import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import LightButton from "components/atoms/LightButton/index";
import HeaderMenuBar from "components/organisms/HeaderMenu";
import MainContainer from "components/layout/MainContainer";
import SummarySection from "../components/organisms/SummarySection/index";
import ContentSection from "components/organisms/ContentSection";
import YearData from "components/molecules/YearData";

const useStyles = makeStyles((theme: Theme) => ({
  summaryText: {
    padding: theme.spacing(2.5),
    textAlign: "center"
  },
  spacer: {
    marginBottom: theme.spacing(2)
  },
  bigSpacer: {
    marginBottom: theme.spacing(3)
  },
  year: {
    fontWeight: 700
  }
}));

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <MainContainer>
      <HeaderMenuBar className={classes.spacer}>
        <LightButton />
      </HeaderMenuBar>
      <SummarySection className={classes.spacer}>
        <Typography className={classes.summaryText} variant="body2">
          Hello, I’m Front-end Enginner based in Japan!
        </Typography>
      </SummarySection>
      <ContentSection
        title="BIO"
        content={
          <>
            <Typography variant="body2" className={classes.bigSpacer}>
              Hello, I’m Front-end Takuya is a freelance and a full-stack
              developer based in Osaka with a passion for digital services/stuff
              he wants. He has a knack for all things launching products, from
              planning and designing all the way to solving real-life problems
              with code. When not online, he loves hanging out with his camera.
              Currently, he is living off of his own product called based in
              Japan!
            </Typography>
            <div>
              <YearData
                yearNum={1994}
                text="Born in Kanagawa (神奈川), Japan.Born in Kanagawa (神奈川), Japan.Born in Kanagawa (神奈川), Japan."
              />
              {/* <YearData
                yearNum={2012}
                text="Graduated from Waseda University Faculty of Creative Science and Engineering, Department of Management Systems Engineering
"
              /> */}
            </div>
          </>
        }
      />
    </MainContainer>
  );
};

export default Home;
