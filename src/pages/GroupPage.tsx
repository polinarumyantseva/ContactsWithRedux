import { memo, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setFilteredContacts } from 'src/store/actions';
import { ContactList } from 'src/components';

export const GroupPage = memo(() => {
	const { groupId } = useParams<{ groupId: string }>();
	const dispatch = useAppDispatch();
	const group = useAppSelector((state) => state.groups.find((g) => g.id === groupId));
	const { contacts } = useAppSelector((state) => state);

	useEffect(() => {
		if (group) {
			const groupContacts = contacts.allContacts.filter(({ id }) => group.contactIds.includes(id));
			dispatch(setFilteredContacts(groupContacts));
		}
	}, [group, contacts.allContacts, dispatch]);

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
