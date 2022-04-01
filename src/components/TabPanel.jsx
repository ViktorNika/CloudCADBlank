import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box 
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
