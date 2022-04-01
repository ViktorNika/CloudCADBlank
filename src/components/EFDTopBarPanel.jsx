import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { showNewProjectDialog } from '../store/actionCreators'

export default function MockCADTopBarPanel() {
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row'
            }}
        >
            <Divider orientation="vertical" flexItem/>
            <Button variant="outlined" onClick={(() => { showNewProjectDialog(dispatch) })}>
                Add Project
            </Button>
        </Box>
    );
}