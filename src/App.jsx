// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

// import initialContacts from './contactsList.json';

const App = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contactsReducer.contacts;
  // const filter = useSelector(state => state.contactsReducer.filter;

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
