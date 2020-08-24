import contactsAPI from '../api/contactsAPI';
import loadContactsSuccess from './contactActions'

let getContacts = () => {
    return function(dispatch) {
        return contactsAPI.getAllContacts().then(contacts => {
            dispatch(loadContactsSuccess(contacts))
        }).catch(error => {
            throw(error)
        })
    }
}

export default getContacts