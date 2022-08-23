const getContacts = state => state.contacts.contacts;
const getStatus = state => state.contacts.status;
const getError = state => state.contacts.error;

const contactsSelectors = {
    getContacts,
    getStatus,
    getError
}

export default contactsSelectors;