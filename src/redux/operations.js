// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await fetch(
//         'https://6483157cf2e76ae1b95beb62.mockapi.io/contacts/'
//       );

//       if (!response.ok) {
//         throw new Error('Server Error!');
//       }

//       const data = await response.json();

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactsSlice';
// axios.defaults.baseURL = 'https://648580c8a795d24810b70475.mockapi.io';
// export const fetchContacts = () => async dispatch => {
//   try {
//     // Индикатор загрузки
//     dispatch(fetchingInProgress());
//     // HTTP-запрос
//     const response = await axios.get('/contacts');
//     // Обработка данных
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обработка ошибки
//     dispatch(fetchingError(e.message));
//   }
// };

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://648580c8a795d24810b70475.mockapi.ios';
// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// });

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://648580c8a795d24810b70475.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (id, name, number, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { id, name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
