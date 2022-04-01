import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Split } from '@geoffcox/react-splitter';
import ApplicationTopBar from './ApplicationTopBar';
import LeftToolFrame from './LeftToolFrame';
import ModelView from './ModelView';

import * as React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: "#005a8c"
        },
        secondary: {
            main: "#fddc69"
        }
    },
});

function ApplicationFrame() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    overflow: 'hidden'
                }}>
                <ApplicationTopBar>
                </ApplicationTopBar>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        height: 0
                    }}>

                    <Split initialPrimarySize='400px'
                        renderSplitter={() => <div />}
                        minPrimarySize='150px'
                        >
                        <LeftToolFrame>
                        </LeftToolFrame>
                        <ModelView>
                        </ModelView>
                    </Split>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ApplicationFrame;
