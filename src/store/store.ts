import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsApiSlice, filteredContactsSlise } from './contactsReduser';
import { groupsApiSlice } from './groupsReducer';

const rootReducer = combineReducers({
	filteredContacts: filteredContactsSlise.reducer,
	[contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
	[groupsApiSlice.reducerPath]: groupsApiSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(contactsApiSlice.middleware, groupsApiSlice.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
