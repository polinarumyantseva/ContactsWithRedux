import { Col, Row } from 'react-bootstrap';
import { ContactCard } from './ContactCard';
import { useAppSelector } from 'src/store/hooks';

interface ContactListProps {
	showOnlyFavorites?: boolean;
}

export const ContactList = ({ showOnlyFavorites = false }: ContactListProps) => {
	const contacts = useAppSelector((state) => state.contacts);
	const favorites = useAppSelector((state) => state.favorites);

	const displayedContacts = showOnlyFavorites
		? contacts.allContacts.filter((contact) => favorites.includes(contact.id))
		: contacts.filtered;

	return (
		<Row xxl={4} className='g-4'>
			{displayedContacts.map((contact) => (
				<Col key={contact.id}>
					<ContactCard contact={contact} withLink />
				</Col>
			))}
		</Row>
	);
};
