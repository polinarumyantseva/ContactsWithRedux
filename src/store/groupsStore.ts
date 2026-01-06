import { makeAutoObservable } from 'mobx';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const groupsStore = makeAutoObservable({
	groups: [] as GroupContactsDto[],
	*getGroups() {
		const response: GroupContactsDto[] = yield fetch(
			'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json'
		).then((res) => res.json());

		groupsStore.groups = response;
	},
});

groupsStore.getGroups();
