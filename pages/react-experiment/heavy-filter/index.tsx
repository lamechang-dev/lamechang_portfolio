import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Toolbar,
  Typography,
  Theme,
  useTheme,
} from "@mui/material";
import HeaderMenuBar from "src/components/ui/HeaderMenu";
import PageContainer from "src/components/ui/PageContainer";
import HeavyFilterPageComponent from "src/components/pages/react_experiment/useTransition/heavyFilter";
import HeavyFilterWithTransitionPageComponent from "src/components/pages/react_experiment/useTransition/heavyFilterWithUseTransition";
import HeavyFilterWithUseDeferredValuePageComponent from "src/components/pages/react_experiment/useTransition/heavyFilterWithUseDeferredValue";
import clsx from "clsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ReactExperimentPage = () => {
  const theme = useTheme<Theme>();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <PageContainer>
      <HeaderMenuBar className={"mb-2"} />
      <Typography variant="h6" className="mb-4">
        Heavy Filter performance test
      </Typography>
      <Toolbar
        className={clsx(
          "mb-4",
          "border-2",
          "rounded-lg",
          theme.palette.mode === "light"
            ? "border-lightPaper"
            : "border-darkPaper"
        )}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="react experiments tabs"
        >
          <Tab className="text-nowrap" label="useState" {...a11yProps(0)} />
          <Tab
            className="text-nowrap"
            label="useTransition"
            {...a11yProps(1)}
          />
          <Tab
            className="text-nowrap"
            label="useDeferredValue"
            {...a11yProps(2)}
          />
        </Tabs>
      </Toolbar>
      <div className="m-4">
        <Typography variant="body1" className="mb-2">
          ・デフォルトで1〜10000の数値を描画
        </Typography>
        <Typography variant="body1" className="mb-8">
          ・インプット入力時に即座にフィルタリングされたリストが描画される
        </Typography>
      </div>
      <TabPanel value={tabValue} index={0}>
        <HeavyFilterPageComponent />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <HeavyFilterWithTransitionPageComponent />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <HeavyFilterWithUseDeferredValuePageComponent />
      </TabPanel>
    </PageContainer>
  );
};
export default ReactExperimentPage;
