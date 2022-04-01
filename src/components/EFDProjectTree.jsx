import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchRemoteProjects, editProjectCommand, deleteRemoteProject, showNewProjectDialog } from '../store/actionCreators'

function CommandGroup(props) {
  const { actionIcon, onAction } = props;

  return (
    <IconButton
      color="primary"
      size="small"
      onClick={onAction}>
      {actionIcon}
    </IconButton>
  );
}

function EFDTreeItem(props) {
  const { id, text, actions, children } = props;
  return (
    <TreeItem
      key={id}
      nodeId={id.toString()}
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <Typography
            variant="body1"
            align='center'
          >
            {text}
          </Typography>
          {actions}
        </Box>
      }
    >
      {children}
    </TreeItem>
  );
}

export default function EFDProjectTree() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRemoteProjects());
  }, [dispatch]);

  const projectTree = useSelector(state => state.projectTree);
  if (projectTree.isLoading) {
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
    const projectTreeItems = projectTree.projects.map((project) => {
      return (
        <EFDTreeItem
          id={project.id}
          text={project.name}
          key={project.id.toString()}
          actions={
            [
              <CommandGroup
                actionIcon={<EditIcon />}
                onAction={(() => { dispatch(editProjectCommand()) })}
              />,
              <CommandGroup
                actionIcon={<DeleteIcon />}
                onAction={(() => { dispatch(deleteRemoteProject(project)) })}
              />
            ]
          }
        />
      );
    });

    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="rootId" label="Projects">
          {projectTreeItems}
          </TreeItem>
      </TreeView>
    );
  }
}