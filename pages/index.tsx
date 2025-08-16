import { NextPage } from "next";
import TopPageComponent from "src/components/pages";
import { withCommonStaticProps } from "src/lib/withCommonStaticProps";

const TopPage: NextPage = () => {
  return <TopPageComponent />;
};

export default TopPage;

export const getStaticProps = withCommonStaticProps(async () => {
  return { props: {} };
});
