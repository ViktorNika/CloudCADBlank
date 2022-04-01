import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ProjectTree } from './projectTree';
import { PropertyManager } from './propertyManager';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projectTree: ProjectTree,
            propertyManager: PropertyManager
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
