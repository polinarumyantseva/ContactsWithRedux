import { Col, Row } from 'react-bootstrap';
import { ContactCard } from './ContactCard';
import { contactsStore } from 'src/store/contactsStore';
import { observer } from 'mobx-react-lite';

interface ContactListProps {
	showOnlyFavorites?: boolean;
}

export const ContactList = observer(({ showOnlyFavorites = false }: ContactListProps) => {
	const filteredContacts = contactsStore.filteredContacts;
	const favorites = contactsStore.getFavoriteContacts();
	const displayedContacts = showOnlyFavorites ? favorites : filteredContacts;

	if (!displayedContacts) {
		return <div>Нет данных</div>;
	}

	return (
		<Row xxl={4} className='g-4'>
			{displayedContacts.map((contact) => (
				<Col key={contact.id}>
					<ContactCard contact={contact} withLink />
				</Col>
			))}
		</Row>
	);
});
