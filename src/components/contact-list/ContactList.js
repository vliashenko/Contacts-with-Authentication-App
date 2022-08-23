import { Container, ListItem } from "./ContactList.styled";

const ContactList = ({ contacts }) => {
    return (
        <Container>
            <h1>
                Contacts
            </h1>
            
           {contacts.map(item => {
            return (
                <ListItem key={item.id}>
                    {item.name} : {item.number}
                </ListItem>
            )})}
        </Container>
    );
};

export default ContactList;