import { ContactDto } from 'src/types/dto/ContactDto';

export const SET_FILTERED_CONTACTS = 'SET_FILTERED_CONTACTS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

interface SetFilteredContactsAction {
	type: typeof SET_FILTERED_CONTACTS;
	payload: ContactDto[];
}

interface ToggleFavoriteAction {
	type: typeof TOGGLE_FAVORITE;
	payload: string;
}

export const setFilteredContacts = (contacts: ContactDto[]) => ({
	type: SET_FILTERED_CONTACTS,
	payload: contacts,
});

export const toggleFavorite = (contactId: string) => ({
	type: TOGGLE_FAVORITE,
	payload: contactId,
});

export type ContactsActionTypes = SetFilteredContactsAction;
export type FavoriteActionTypes = ToggleFavoriteAction;
