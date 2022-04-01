import { useSelector } from 'react-redux';
import EFDProjectTree from './EFDProjectTree';
import EFDPropertyManager from './EFDPropertyManager';

export default function EFDLeftToolFrame() {
    const projectEditMode = useSelector(state => state.projectTree.editMode)

    if (projectEditMode) {
        return (
            <EFDPropertyManager />
        );
    }
    else {
        return (
            <EFDProjectTree />
        );
    }
}
