import { memo, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactList, FilterForm, FilterFormValues } from 'src/components';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useAppDispatch } from 'src/store/hooks';
import { setFilteredContacts, useGetContactsQuery } from 'src/store/contactsReduser';
import { useGetGroupsQuery } from 'src/store/groupsReducer';

export const ContactListPage = memo(() => {
	const dispatch = useAppDispatch();
	const { data: groups } = useGetGroupsQuery();
	const { data: allContacts } = useGetContactsQuery();

	useEffect(() => {
		if (allContacts && allContacts.length > 0) {
			dispatch(setFilteredContacts(allContacts));
		}
	}, [allContacts, dispatch]);

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
