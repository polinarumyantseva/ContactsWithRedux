import { DATA_CONTACT } from 'src/__data__';
import { FavoriteActionTypes, TOGGLE_FAVORITE } from './actions';
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto';

const initialState: FavoriteContactsDto = [
	DATA_CONTACT[0].id,
	DATA_CONTACT[1].id,
	DATA_CONTACT[2].id,
	DATA_CONTACT[3].id,
];

export const favoritesReducer = (state = initialState, action: FavoriteActionTypes) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const contactId = action.payload;
			return state.includes(contactId) ? state.filter((id) => id !== contactId) : [...state, contactId];

		default:
			return state;
	}
};
