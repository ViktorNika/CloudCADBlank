import * as ActionTypes from './actionTypes'

export const ProjectTree = (state = {
    isLoading: true,
    editMode: false,
    projects: []
}, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_PROJECT_TREE:
            return { ...state, editMode: false };

        case ActionTypes.EDIT_PROJECT:
            return { ...state, editMode: true };

        case ActionTypes.DELETE_PROJECT:
            return { ...state, projects: state.projects.filter(item => (item.id != action.payload.id)) }

        case ActionTypes.ADD_PROJECT:
            return { ...state, projects: state.projects.concat(action.payload) };

        case ActionTypes.PROJECTS_LOADING:
            return { ...state, isLoading: true, projects: [] }

        case ActionTypes.ADD_PROJECTS:
            return { ...state, isLoading: false, projects: action.payload };

        default:
            return state;
    }
} 