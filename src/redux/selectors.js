export const selectContacts = state => state.data.contacts;
export const selectIsLoading = state => state.data.contacts.isLoading;
export const selectError = state => state.data.contacts.error;
export const selectValueFilter = state => state.sorting.filter;

export const selectfilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectValueFilter(state);
  return contacts.items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};