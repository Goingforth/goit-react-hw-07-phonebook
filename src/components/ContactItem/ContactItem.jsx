import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ButtonDelete, Item } from './ContactItem.styled';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>{name}:</span> <span>{phone}</span>
      <ButtonDelete
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};
export default ContactItem;
