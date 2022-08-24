import { Container, ListItem, Button } from "./ContactList.styled";
import ContactInput from "components/contact-input/ContactInput";
import { BsFillTrashFill } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { contactsOperations } from "redux/contacts";

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();
    return (
        <Container>
            <h1>
                Contacts
            </h1>

            <ContactInput/>
            
           {contacts.map(item => {
            return (
                <ListItem key={item.id}>
                    {item.name} : {item.number}
                    
                    <Button onClick={() => dispatch(contactsOperations.deleteContact(item.id))}> 
                        <BsFillTrashFill size={"14px"}/>
                    </Button>
                </ListItem>
            )})}
        </Container>
    );
};

export default ContactList;