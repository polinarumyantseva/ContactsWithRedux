import { makeAutoObservable } from 'mobx';
import { ContactDto } from 'src/types/dto/ContactDto';

const favoriteIndexes = [0, 2, 4];

export const contactsStore = makeAutoObservable({
	contacts: [] as ContactDto[],
	filteredContacts: [] as ContactDto[],

	*getContacts() {
		const response: ContactDto[] = yield fetch(
			'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json'
		).then((res) => res.json());

		contactsStore.contacts = response;
		contactsStore.filteredContacts = response;
	},
	getContactById(id: string) {
		return contactsStore.contacts.find((contact) => contact.id === id);
	},
	setFilteredContacts(newContacts: ContactDto[]) {
		contactsStore.filteredContacts = newContacts;
	},
	getFavoriteContacts() {
		return favoriteIndexes.map((index) => contactsStore.contacts[index]).filter(Boolean);
	},
});

contactsStore.getContacts();
