import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactListConfig = {
  key: 'contactList',
  storage,
  whitelist: ['items'],
};

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contact: persistReducer(contactListConfig, contactsReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
