import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    CHANGE_ROBOT_ID,
    SHOW_MODAL,
    HIDE_MODAL
} from './constants.js';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
}

const initialStateRobotID = {
    robotID: -1
}

export const robotSelected = (state=initialStateRobotID, action={}) => {
    switch(action.type) {
        case CHANGE_ROBOT_ID:
            return Object.assign({}, state, { robotID: action.payload });
        default:
            return state;
    }
}

const initialShowModal = {
    showModal: false
}

export const toggleModal = (state=initialShowModal, action={}) => {
    switch(action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, { showModal: true });
        case HIDE_MODAL:
            return Object.assign({}, state, { showModal: false });
        default:
            return state;
    }
}