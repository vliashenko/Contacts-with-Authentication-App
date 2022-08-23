import ContactList from "components/contact-list/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import contactsSelectors from "redux/contacts/contacts-selectors";
import { contactsOperations } from "redux/contacts";


const ContactsView = () => {
    const contacts = useSelector(contactsSelectors.getContacts);
    const status = useSelector(contactsSelectors.getStatus);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    },[dispatch])

    if(status === "rejected") {
        return (
            <h1>You have to be logged in!</h1>
        );
    };

    if(status === "pending") {
        return (
            <h1>Loading...</h1>
        );
    };

    if(status === "fulfilled") {
        return (
            <>
                <ContactList contacts={contacts}/>
            </>
        );
    };
   
};

export default ContactsView;