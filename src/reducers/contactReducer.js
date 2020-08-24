import * as types from '../actions/actionTypes';
import initialState from './initialState';

let contactsReducer = (state=initialState.contacts, action) => {
    switch (action.type) {
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts
        default:
            return state
    }
}

export default contactsReducer