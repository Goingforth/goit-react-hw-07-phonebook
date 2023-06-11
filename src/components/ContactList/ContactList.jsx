import { useSelector } from 'react-redux';
import { List, Message } from './List.styled';

import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(state => state.sorting.filter);

  const filteredContacts = () => {
    return contacts.items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {filteredContacts().length > 0 ? (
        filteredContacts().map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))
      ) : (
        <Message>No contacts in phonebook.</Message>
      )}
    </List>
  );
};
export default ContactList;
