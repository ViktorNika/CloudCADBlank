import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import ToolWindow from './ToolWindow';
import MockCADPropertyManager from './MockCADPropertyManager';
import EFDLeftToolFrame from './EFDLeftToolFrame';

export default function LeftToolFrame() {
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabIndexChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                height: '100%'
            }}
        >
            <Tabs
                orientation="vertical"
                value={tabIndex}
                onChange={handleTabIndexChange}
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    minWidth: '90px',
                }}
            >
                <Tab icon={<AccountTreeIcon />} />
                <Tab icon={<AccountTreeIcon />} />
                <Tab icon={<AccountTreeIcon />} />
                <Tab icon={<AccountTreeIcon />} />
                <Tab icon={<AccountTreeIcon />} />
                <Tab icon={<AccountTreeIcon />} />
                <Tab icon={<FacebookIcon />} />
            </Tabs>

            <ToolWindow
                title="Title"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    height: '100%',
                    width: 1,
                }}
            >
                <TabPanel value={tabIndex}
                    index={0}
                    sx={{
                        width: '100%',
                    }}
                >
                    <MockCADPropertyManager />
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={tabIndex} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={tabIndex} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={tabIndex} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={tabIndex} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={tabIndex}
                    index={6}
                    sx={{
                        width: '100%',
                    }}
                >
                    <EFDLeftToolFrame />
                </TabPanel>
            </ToolWindow>
        </Box>
    );
}