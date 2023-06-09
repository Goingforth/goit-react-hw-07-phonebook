import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsInitialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
  },
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        const items = state.contacts.items;
        const contactsName = items.map(el => el.name);
        const name = action.payload.name;
        contactsName.includes(name)
          ? alert(`${name} is already in contacts`)
          : items.push(action.payload);
        // const contactsName = state.contacts.items.map(el => el.name);
        // const name = action.payload.name;
        // contactsName.includes(name)
        //   ? alert(`${name} is already in contacts`)
        //   : state.contacts.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    delContact(state, action) {
      const delID = action.payload.id;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== delID
      );
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
