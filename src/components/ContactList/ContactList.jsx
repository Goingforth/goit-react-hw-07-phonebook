import { useSelector } from 'react-redux';
import { List, Message } from './List.styled';

import ContactItem from 'components/ContactItem/ContactItem';
import { selectfilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <List>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))
      ) : (
        <Message>No contacts in phonebook.</Message>
      )}
    </List>
  );
};
export default ContactList;
