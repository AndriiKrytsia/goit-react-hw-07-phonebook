import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selector';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const applyFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = applyFilter();
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button onClick={() => onDeleteContact(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
