import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectNameContacts } from 'redux/selectors';

import { FormContact } from './FormContact.styled';
import { Border } from './Border.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsName = useSelector(selectNameContacts);
  console.log(contactsName);
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    contactsName.includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <>
      <Border>
        <form onSubmit={handleSubmit}>
          <FormContact>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>

            <div>
              <label>Number</label>
              <input
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>

            <div>
              <button type="submit">Add contact</button>
            </div>
          </FormContact>
        </form>
      </Border>
    </>
  );
};
export default ContactForm;
