import { createSlice } from '@reduxjs/toolkit';

import initialContacts from '../contactsList.json';

console.log(initialContacts);

const INITIAL_STATE = {
  contacts: {
    items: initialContacts,
  },
  // filters: {
  //   name: '',
  // },
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload,
      );
    },
    // changeFilter(state, action) {
    //   state.filters.name = action.payload;
    // },
  },
});

// Генератори Action Creator
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
