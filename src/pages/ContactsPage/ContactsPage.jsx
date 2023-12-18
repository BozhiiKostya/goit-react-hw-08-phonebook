import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/operations/contacts-operations';
import { BsBackspace } from 'react-icons/bs';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Filter } from 'components/Filter/Filter';
import { ContainerContacts } from './ContactsPage.styled';
import { selectFilterContacts } from 'redux/selectors';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.contact);
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);
  const FilterContacts = useSelector(selectFilterContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerContacts>
      <h2>Contacts</h2>
      <ContactsForm />
      <Filter />
      <ul className="list-contacts">
        {authenticated &&
          contacts.length > 0 &&
          FilterContacts.map(({ name, number, id }) => (
            <li className="item-contacts" key={id}>
              <p className="text-contacts">
                <span>{name + ': '}</span> <span>{number}</span>
              </p>
              <button
                className="btn-contacts"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                <BsBackspace size={22} />
              </button>
            </li>
          ))}
      </ul>
    </ContainerContacts>
  );
};

export default ContactsPage;
