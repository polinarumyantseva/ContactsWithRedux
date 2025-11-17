import { createStore, combineReducers, applyMiddleware } from 'redux';
import { contactsReduser } from './contactsReduser';
import { groupsReducer } from './groupsReducer';
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
	contacts: contactsReduser,
	favorites: favoritesReducer,
	groups: groupsReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
