import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ContactCard, Empty } from 'src/components';
import { useGetContactsQuery } from 'src/store/contactsReduser';

export const ContactPage = () => {
	const { contactId } = useParams<{ contactId: string }>();
	const { data: allContacts } = useGetContactsQuery();

	const contact: ContactDto | undefined = (allContacts || []).find(({ id }) => id === contactId);

	return (
		<Row xxl={3}>
			<Col className={'mx-auto'}>{contact ? <ContactCard contact={contact} /> : <Empty />}</Col>
		</Row>
	);
};
