import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components';
import { groupsStore } from 'src/store/groupsStore';

export const GroupListPage = observer(() => {
	const groups = groupsStore.groups;

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
