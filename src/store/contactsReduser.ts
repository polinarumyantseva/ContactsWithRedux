import { DATA_CONTACT } from 'src/__data__';
import { ContactsActionTypes, SET_FILTERED_CONTACTS } from './actions';
import { ContactDto } from 'src/types/dto/ContactDto';

interface ContactsState {
	allContacts: ContactDto[];
	filtered: ContactDto[];
}

const initialState: ContactsState = {
	allContacts: DATA_CONTACT,
	filtered: DATA_CONTACT,
};

export const contactsReduser = (state = initialState, action: ContactsActionTypes) => {
	switch (action.type) {
		case SET_FILTERED_CONTACTS:
			return {
				...state,
				filtered: action.payload,
			};

		default:
			return state;
	}
};
