import { Col, Row } from 'react-bootstrap';
import { ContactCard } from './ContactCard';
import { useAppSelector } from 'src/store/hooks';
import { useGetFavoriteContactsQuery } from 'src/store/contactsReduser';

interface ContactListProps {
	showOnlyFavorites?: boolean;
}

export const ContactList = ({ showOnlyFavorites = false }: ContactListProps) => {
	const filteredContacts = useAppSelector((state) => state.filteredContacts);
	const { data: favorites } = useGetFavoriteContactsQuery();

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
};
