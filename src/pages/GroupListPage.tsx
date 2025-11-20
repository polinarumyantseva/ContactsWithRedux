import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components';
import { useGetGroupsQuery } from 'src/store/groupsReducer';

export const GroupListPage = memo(() => {
	const { data: groups } = useGetGroupsQuery();

	if (!groups) {
		return <div>Нет данных</div>;
	}

	return (
		<Row xxl={4}>
			{groups.map((groupContacts) => (
				<Col key={groupContacts.id}>
					<GroupContactsCard groupContacts={groupContacts} withLink />
				</Col>
			))}
		</Row>
	);
});
