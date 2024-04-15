import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filters: {
    name: '',
  },
};

export const filtersSlice = createSlice({
  // Ім'я слайсу
  name: 'filters',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

// Генератори Action Creator
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
