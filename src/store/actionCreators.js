import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

export const openProjectTreeCommand = () => ({
    type: ActionTypes.OPEN_PROJECT_TREE
});

export const editProjectCommand = () => ({
    type: ActionTypes.EDIT_PROJECT
});

export const deleteProjectCommand = (project) => ({
    type: ActionTypes.DELETE_PROJECT,
    payload: project
});

export const addProjectsCommand = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});

export const addProjectCommand = (project) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: project
});

export const projectsLoadingCommand = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const fetchRemoteProjects = () => (dispatch) => {
    dispatch(projectsLoadingCommand(true));

    return fetch(baseUrl + 'projects')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(projects => dispatch(addProjectsCommand(projects)))
}

export const deleteRemoteProject = (project) => (dispatch) => {

    return fetch(baseUrl + 'projects/' + project.id, {
        method: "DELETE",
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(deleteProjectCommand(project)))
        .catch(error => { console.log('delete project', error.message) });
}

export const addRemoteProject = (projectName) => (dispatch) => {

    const newProject = {
        name: projectName,
    };

    return fetch(baseUrl + 'projects', {
        method: "POST",
        body: JSON.stringify(newProject),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addProjectCommand(response)))
        .catch(error => { console.log('add remote project', error.message) });
}

export const showNewProjectDialog = (dispatch) => {
    console.log(dispatch);
    var projectName = prompt('Input project name', 'Project');
    if (projectName.length <= 0) {
        return;
    }

    dispatch(addRemoteProject(projectName));
}

export const loadPropertyManagerGroupsCommand = (groups) => ({
    type: ActionTypes.LOAD_PM_GROUPS,
    payload: groups
});

export const propertyManagerLoadingCommand = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const fetchRemotePropertyManager = () => (dispatch) => {
    dispatch(propertyManagerLoadingCommand(true));

    return fetch(baseUrl + 'propertyManagerGroups')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(groups => dispatch(loadPropertyManagerGroupsCommand(groups)))
}