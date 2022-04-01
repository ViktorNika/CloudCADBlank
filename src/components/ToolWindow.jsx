import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function ToolWindow(props) {
    const { children, title, ...other } = props;
    const headerHeight = '25px';

    return (
        <Box sx={{
            ...props.sx
        }}>
            <AppBar position="static" elevation={0}>
                <Typography
                    variant="subtitle2"
                    component="div"
                    align="left"
                    textTransform="uppercase"
                    sx={{
                        flexGrow: 1,
                        marginLeft: 1,
                        height: headerHeight
                    }}>
                    {title}
                </Typography>
            </AppBar>
            <Box square
                variant="outlined"
                sx={{
                    display: 'flex',
                    height: `calc(100% - ${headerHeight})`,
                    overflowY: 'scroll',
                    overflowX: 'hidden',     
                }}>
                {children}
            </Box>
        </Box>
    );
}

ToolWindow.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};
