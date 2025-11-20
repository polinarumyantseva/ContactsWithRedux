import { memo, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { useAppDispatch } from 'src/store/hooks';
import { ContactList } from 'src/components';
import { setFilteredContacts, useGetContactsQuery } from 'src/store/contactsReduser';
import { useGetGroupsQuery } from 'src/store/groupsReducer';

export const GroupPage = memo(() => {
	const { groupId } = useParams<{ groupId: string }>();
	const dispatch = useAppDispatch();
	const { data: groups } = useGetGroupsQuery();
	const { data: allContacts } = useGetContactsQuery();

	const group = groups ? groups.find((g) => g.id === groupId) : undefined;

	useEffect(() => {
		if (group) {
			const groupContacts = allContacts ? allContacts.filter(({ id }) => group.contactIds.includes(id)) : [];
			dispatch(setFilteredContacts(groupContacts));
		}
	}, [group, allContacts, dispatch]);

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
