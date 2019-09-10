import { combineReducers } from 'redux';
import UrlsReducer from './reducers/UrlsReducer';
import AuthReducer from './reducers/AuthReducer';
import CadastroReducer from './reducers/CadastroReducer';
import CarrinhoReducer from './reducers/CarrinhoReducer';
import vitrine from './store/ducks/vitrine';

const Reducers = combineReducers({
	url: UrlsReducer,
	auth: AuthReducer,
	cad: CadastroReducer,
	car: CarrinhoReducer,
	vitrine,
});

export default Reducers;