import { createSlice } from "@reduxjs/toolkit";
import contactOperations from "./contacts-operations";

const initialState = {
    contacts: null,
    status: null,
    error: null
}

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [contactOperations.fetchContacts.fulfilled] (state, action) {
           state.contacts = action.payload 
           state.status = action.meta.requestStatus
        },
        [contactOperations.addNewContact.fulfilled] (state, action) {
            state.contacts.push(action.payload)
        },
        [contactOperations.fetchContacts.pending] (state, action) {
            state.status = action.meta.requestStatus
        },
        [contactOperations.fetchContacts.rejected] : setError,
    }
})

export default contactsSlice.reducer;