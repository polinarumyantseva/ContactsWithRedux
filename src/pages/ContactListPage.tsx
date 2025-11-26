import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactList, FilterForm, FilterFormValues } from 'src/components';
import { ContactDto } from 'src/types/dto/ContactDto';
import { setFilteredContacts } from 'src/store/actions';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

export const ContactListPage = memo(() => {
	const dispatch = useAppDispatch();
	const { allContacts } = useAppSelector((state) => state.contacts);
	const groups = useAppSelector((state) => state.groups);

	const onSubmit = (fv: Partial<FilterFormValues>) => {
		let findContacts: ContactDto[] = allContacts;

		if (fv.name) {
			const fvName = fv.name.toLowerCase();
			findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1);
		}

		if (fv.groupId) {
			const groupContacts = groups.find(({ id }) => id === fv.groupId);

			if (groupContacts) {
				findContacts = findContacts.filter(({ id }) => groupContacts.contactIds.includes(id));
			}
		}

		dispatch(setFilteredContacts(findContacts));
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
