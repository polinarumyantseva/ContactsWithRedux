import { DATA_GROUP_CONTACT } from 'src/__data__';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

const initialState: GroupContactsDto[] = DATA_GROUP_CONTACT;

export const groupsReducer = (state = initialState) => {
	return state;
};
