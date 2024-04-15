import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div className={css.contactListWrap}>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
