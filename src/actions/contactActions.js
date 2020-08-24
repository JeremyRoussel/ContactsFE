import * as types from './actionTypes'

export default function loadContactsSuccess(contacts) {
    return {type: types.LOAD_CONTACTS_SUCCESS, contacts}
}