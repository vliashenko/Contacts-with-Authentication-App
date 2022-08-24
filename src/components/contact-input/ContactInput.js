import { useDispatch, useSelector } from "react-redux";
import { contactsOperations } from "redux/contacts";
import { useState } from "react";
import contactsSelectors from "redux/contacts/contacts-selectors";

const ContactInput = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let checker = contacts?.filter( 
            item => item.name.toLowerCase() === name.toLowerCase()
        );

        if(name.trim().length === 0 || number.trim().length === 0){
            alert(`Please fill all fields!`);
            return;
         } 

        if(checker.length === 0){
            dispatch(contactsOperations.addNewContact({ name, number }))
        } else {
            alert(`Contact with name ${name} is already in your phonebook!`)
        };

        setName("");
        setNumber("");
    };
    return (
        <form onSubmit={handleSubmit}>
                <label>
                    name
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" />
                </label>
                <label>
                    number
                    <input 
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="text" />
                </label>
                <button type="submit">Add</button>
            </form>
    );
};

export default ContactInput;