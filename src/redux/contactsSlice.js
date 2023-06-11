import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { addContact, deleteContact } from './operations';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  // reducers: {
  //   fetchingInProgress(state) {
  //     state.contacts.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  // },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       const items = state.contacts.items;
  //       const contactsName = items.map(el => el.name);
  //       const name = action.payload.name;
  //       contactsName.includes(name)
  //         ? alert(`${name} is already in contacts`)
  //         : items.push(action.payload);
  //       // const contactsName = state.contacts.items.map(el => el.name);
  //       // const name = action.payload.name;
  //       // contactsName.includes(name)
  //       //   ? alert(`${name} is already in contacts`)
  //       //   : state.contacts.items.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },

  //   delContact(state, action) {
  //     const delID = action.payload.id;
  //     state.contacts.items = state.contacts.items.filter(
  //       contact => contact.id !== delID
  //     );
  //   },
  // },
  // extraReducers: {
  //   [fetchContacts.pending]: state => {
  //     state.isLoading = 'true';
  //     state.error = null;
  //   },
  //   [fetchContacts.fulfilled]: (state, action) => {
  //     state.isLoading = 'false';
  //     state.items = action.payload;
  //   },
  //   // [fetchTodos.rejected]: setError,
  //   // [deleteTodo.rejected]: setError,
  //   // [toggleStatus.rejected]: setError,
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //////
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      console.log(action.payload);
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //////////////
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    ///////////
  },
});

// export const { addContact, delContact } = contactsSlice.actions;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
