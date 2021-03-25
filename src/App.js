import React, { Component } from 'react'
import { Provider } from 'react-redux';

import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import RentalDetail from './components/rental/rental-detail/RentalDetail';
import RentalList from './components/rental/rental-listing/RentalList';
import { store } from './reducers';

import Header from './shared/Header'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className='App'>
						<Header />
						<div className='container'>
							<Route exact path='/' render={() => <Redirect to='/rentals' />} />
							<Route exact path='/rentals' component={RentalList} />
							<Route exact path='/rentals/:id' component={RentalDetail} />
						</div>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App
