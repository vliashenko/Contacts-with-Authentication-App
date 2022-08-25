import ContactList from "components/contact-list/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import contactsSelectors from "redux/contacts/contacts-selectors";
import { contactsOperations } from "redux/contacts";
import styled from "styled-components";

const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 48px;
    text-align: center;
`;

const ContactsView = () => {
    const contacts = useSelector(contactsSelectors.getContacts);
    const status = useSelector(contactsSelectors.getStatus);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    },[dispatch]);

    if(status === "rejected") {
        return (
            <Container>
                <Title>Something went wrong👨🏻‍💻!</Title>
            </Container>
        );
    };

    if(status === "pending") {
        return (
            <Container>
                <Title>Loading...</Title>
            </Container>
        );
    };

    if(status === "fulfilled") {
        return (
            <ContactList contacts={contacts}/>
        );
    };
   
};

export default ContactsView;