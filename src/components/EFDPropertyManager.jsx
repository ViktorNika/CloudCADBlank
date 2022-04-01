import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { openProjectTreeCommand, fetchRemotePropertyManager } from '../store/actionCreators'

function PMControl(props) {
    const { controlDescription } = props;

    switch (controlDescription.type) {
        case "checkbox":
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label={controlDescription.label} />
                </FormGroup>
            );
        case "slider":
            return (
                <FormGroup>
                    <FormControlLabel control={ <Slider defaultValue={50} valueLabelDisplay="auto" />} label={controlDescription.label} />
                </FormGroup>
            );
    }

    return (
        <div></div>
    );
}

export default function EFDPropertyManager() {
    const dispatch = useDispatch();
    const close = () => {
        dispatch(openProjectTreeCommand())
    }

    useEffect(() => {
        dispatch(fetchRemotePropertyManager());
    }, [dispatch]);

    const pm = useSelector(state => state.propertyManager);
    if (pm.isLoading) {
        return (
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <CircularProgress />
            </Box>
        );
    }
    else {
        const groupItems = pm.groups.map((group) => {
            const groupControls = group.controls.map((control) => {
                return <PMControl controlDescription={control}></PMControl>
            });
            return (
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography noWrap>{group.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {groupControls}
                    </AccordionDetails>
                </Accordion>
            );
        });

        return (
            <div>
                {groupItems}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}>

                    <Button onClick={() => { close(); }}>Ok</Button>
                    <Button onClick={() => { close(); }}>Cancel</Button>
                </Box>
            </div>
        );
    }
}