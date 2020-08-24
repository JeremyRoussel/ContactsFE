class contactsAPI {
    static getAllContacts() {
        return fetch('http://localhost:3001/crud')
            .then(response => response.json())
            .catch(error => error)
    }
}

export default contactsAPI