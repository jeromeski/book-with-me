import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rentalsReducer, selectedRentalReducer } from './rental-reducer';

const middleware = [thunk];

const rootReducer = combineReducers({
	rentals: rentalsReducer,
	rental: selectedRentalReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
