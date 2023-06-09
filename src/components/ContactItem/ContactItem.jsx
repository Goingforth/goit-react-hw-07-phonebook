import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';

import { ButtonDelete, Item } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>{name}:</span> <span>{number}</span>{' '}
      <ButtonDelete
        onClick={() => {
          dispatch(delContact({ id }));
        }}
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};
export default ContactItem;
