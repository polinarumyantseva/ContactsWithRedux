import { memo } from 'react';
import { ContactList } from 'src/components';

export const FavoritListPage = memo(() => {
	return <ContactList showOnlyFavorites={true} />;
});
