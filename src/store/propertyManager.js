import * as ActionTypes from './actionTypes'

export const PropertyManager = (state = {
    isLoading: true,
    groups: []
}, action) => {
    switch (action.type) {
        case ActionTypes.PM_LOADING:
            return { ...state, isLoading: true, groups: [] }

        case ActionTypes.LOAD_PM_GROUPS:
            return { ...state, isLoading: false, groups: action.payload };

        default:
            return state;
    }
} 