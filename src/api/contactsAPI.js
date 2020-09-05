class contactsAPI {
    static getAllContacts() {
        return fetch('http://localhost:3001/crud')
            .then(response => response.json())
            .catch(error => error)
    }


    // contactBody of type: { first: "", last: "", email: "", phone: "", location: "", hobby: "" }

    static addContact(contactBody){
        return fetch('http://localhost:3001/crud', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: contactBody})
            .then(response => console.log(response.json()))
            
            // Update here ??
            
            // .then(item => {
            //   if(Array.isArray(item)) {
            //     this.props.addItemToState(item[0])
            //     this.props.toggle()
            //   } else {
            //     console.log('failure')
            //   }
            // })
            
            .catch(error => error)
    }
}

export default contactsAPI