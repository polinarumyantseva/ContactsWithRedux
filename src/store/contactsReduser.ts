import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactDto } from 'src/types/dto/ContactDto';

const favoriteIndexes = [0, 2, 4];
const initialState: ContactDto[] = [];

export const filteredContactsSlise = createSlice({
	name: 'filteredContacts',
	initialState,
	reducers: {
		setFilteredContacts(state, action: PayloadAction<ContactDto[]>) {
			return action.payload;
		},
	},
});

export const contactsApiSlice = createApi({
	reducerPath: 'contactsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h' }),
	endpoints(builder) {
		return {
			getContacts: builder.query<ContactDto[], void>({
				query: () => ({ url: '/3f9021c6ea91fc0306ceb0e9c2f2e56c.json' }),
			}),
			getFavoriteContacts: builder.query<ContactDto[], void>({
				query: () => '/3f9021c6ea91fc0306ceb0e9c2f2e56c.json',
				transformResponse: (response: ContactDto[]) => {
					return favoriteIndexes.map((index) => response[index]).filter(Boolean);
				},
			}),
		};
	},
});

export const { setFilteredContacts } = filteredContactsSlise.actions;

export const { useGetContactsQuery, useGetFavoriteContactsQuery } = contactsApiSlice;
