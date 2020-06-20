import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    CHANGE_ROBOT_ID,
    SHOW_MODAL,
    HIDE_MODAL
} from './constants.js';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}

export const setRobotID = (number) => {
    return {
        type: CHANGE_ROBOT_ID,
        payload: parseInt(number)
    }
}

export const modalToToggle = (bool) => {
    let type = '';
    bool ? type = SHOW_MODAL : type = HIDE_MODAL;
    return {
        type: type,
        payload: bool
    }
}