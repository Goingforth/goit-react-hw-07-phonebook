import { useSelector } from 'react-redux';
import { List, Message } from './List.styled';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.data.contacts);

  const filter = useSelector(state => state.sorting.filter);

  const filteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {filteredContacts().length > 0 ? (
        filteredContacts().map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <Message>No contacts in phonebook.</Message>
      )}
    </List>
  );
};
export default ContactList;
