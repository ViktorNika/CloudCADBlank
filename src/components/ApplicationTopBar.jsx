import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TabPanel from './TabPanel';
import MockCADTopBarPanel from './MockCADTopBarPanel';
import EFDTopBarPanel from './EFDTopBarPanel'

export default function ApplicationTopBar() {
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabIndexChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div>
            <AppBar position="static" elevation={0}>
                <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
                    Cloud CAD
                </Typography>
                <Tabs
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="standard"
                    value={tabIndex}
                    onChange={handleTabIndexChange}
                >
                    <Tab label="File" />
                    <Tab label="Home" />
                    <Tab label="Assemblies" />
                    <Tab label="Curve" />
                    <Tab label="Surface" />
                    <Tab label="Analysis" />
                    <Tab label="View" />
                    <Tab label="Tools" />
                    <Tab label="Flow Analysis" />
                </Tabs>
                <Paper square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: 1,
                        height: '45px',
                        alignContent: 'center'
                    }}>
                    <TabPanel value={tabIndex} index={0}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={1}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={2}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={3}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={4}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={5}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={6}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={7}>
                        <MockCADTopBarPanel/>
                    </TabPanel>
                    <TabPanel value={tabIndex} index={8}>
                        <EFDTopBarPanel/>
                    </TabPanel>
                </Paper>
            </AppBar>
            <Divider />
        </div>
    );
}
