import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactList } from 'src/components';
import { groupsStore } from 'src/store/groupsStore';
import { contactsStore } from 'src/store/contactsStore';

export const GroupPage = observer(() => {
	const { groupId } = useParams<{ groupId: string }>();
	const groups = groupsStore.groups;
	const allContacts = contactsStore.contacts;
	const group = groups ? groups.find((g) => g.id === groupId) : undefined;

	useEffect(() => {
		if (group) {
			const groupContacts = allContacts ? allContacts.filter(({ id }) => group.contactIds.includes(id)) : [];
			contactsStore.setFilteredContacts(groupContacts);
		}
	}, [group, allContacts]);

	return (
		<Row className='g-4'>
			{group ? (
				<>
					<Col xxl={12}>
						<Row xxl={3}>
							<Col className='mx-auto'>
								<GroupContactsCard groupContacts={group} />
							</Col>
						</Row>
					</Col>
					<Col>
						<ContactList />
					</Col>
				</>
			) : (
				<Empty />
			)}
		</Row>
	);
});
