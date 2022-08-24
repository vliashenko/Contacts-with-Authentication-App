import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = createAsyncThunk("/contacts/FetchContacts", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("/contacts");
        return data;
    } catch(error) {
        return rejectWithValue(error.message);
    };
});

const addNewContact = createAsyncThunk("/contacts/AddContact", async ({ number, name }, { rejectWithValue, dispatch }) => {
    try {
        const contact = {
            name,
            number
        };

        const { data } = await axios.post("/contacts", contact);
       

        return data;

    } catch(error) {
        return rejectWithValue(error.message);
    };
});

const deleteContact = createAsyncThunk("/contacts/DeleteContact", async ( id, { rejectWithValue, dispatch }) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        dispatch(fetchContacts())
        return data;

    } catch(error) {
        return rejectWithValue(error.message);
    };
});

const contactsOperations = {
    fetchContacts,
    addNewContact,
    deleteContact
};

export default contactsOperations;