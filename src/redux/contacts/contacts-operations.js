import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = createAsyncThunk("/contacts/FetchContacts", async (_, {rejectWithValue}) => {
    try {
        const { data } = await axios("/contacts");
        
        return data;
    } catch(error) {
        return rejectWithValue(error.message)
    }
})

const contactsOperations = {
    fetchContacts
}

export default contactsOperations;