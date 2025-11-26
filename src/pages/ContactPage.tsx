import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ContactCard, Empty } from 'src/components';
import { useAppSelector } from 'src/store/hooks';

export const ContactPage = () => {
	const { contactId } = useParams<{ contactId: string }>();

	const contact: ContactDto | undefined = useAppSelector((state) =>
		state.contacts.allContacts.find(({ id }) => id === contactId)
	);

	return (
		<Row xxl={3}>
			<Col className={'mx-auto'}>{contact ? <ContactCard contact={contact} /> : <Empty />}</Col>
		</Row>
	);
};
