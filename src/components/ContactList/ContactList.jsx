import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.name);

  // filter contacts
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase()),
  );

  return (
    <div className={css.contactListWrap}>
      <ul className={css.contactList}>
        {filterContacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
