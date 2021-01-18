import Box from '@material-ui/core/Box';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, {useState} from 'react';

interface TabPanelProps {
  index: number;
  tabIndexValue: number;
  text: string;
}

function TabPanel({text, tabIndexValue, index}: TabPanelProps) {
  const [inputText, setInputText] = useState(text)
  return (
    <Typography component="div" role="tabpanel" hidden={tabIndexValue !== index}>
      {tabIndexValue === index && <Box p={3}>
        <input value={inputText} onChange={(event) => setInputText(event.target.value)}/>
      </Box>}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One"/>
        <Tab label="Item Two"/>
        <Tab label="Item Three"/>
      </Tabs>
      <TabPanel tabIndexValue={value} index={0} text={'aaa'}/>
      <TabPanel tabIndexValue={value} index={1} text={'bbb'}/>
      <TabPanel tabIndexValue={value} index={2} text={'ccc'}/>
    </div>
  );
}
