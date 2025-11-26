import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import { ContactList, FilterForm, FilterFormValues } from 'src/components';
import { ContactDto } from 'src/types/dto/ContactDto';
import { contactsStore } from 'src/store/contactsStore';
import { groupsStore } from 'src/store/groupsStore';

export const ContactListPage = observer(() => {
	const groups = groupsStore.groups;
	const allContacts = contactsStore.contacts;

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		let findContacts: ContactDto[] = allContacts || [];

		if (fv.name) {
			const fvName = fv.name.toLowerCase();
			findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1);
		}

		if (fv.groupId && groups) {
			const groupContacts = groups.find(({ id }) => id === fv.groupId);

			if (groupContacts) {
				findContacts = findContacts.filter(({ id }) => groupContacts.contactIds.includes(id));
			}
		}

		contactsStore.setFilteredContacts(findContacts);
	};

	return (
		<Row xxl={1}>
			<Col className='mb-3'>
				<FilterForm groupContactsList={groups} initialValues={{}} onSubmit={onSubmit} />
			</Col>
			<Col>
				<ContactList />
			</Col>
		</Row>
	);
});
