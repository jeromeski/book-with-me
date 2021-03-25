import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import RentalDetail from './components/rental/RentalDetail';
import RentalList from './components/rental/RentalList';

import Header from './shared/Header'

class App extends Component {
  render () {
    return (
			<BrowserRouter>
				<div>
					<Header />
					<div className='container'>
              <Route exact path='/' render={() => <Redirect to='/rentals'/>} />
							<Route exact path='/rentals' component={RentalList} />
							<Route exact path='/rentals/:id' component={RentalDetail} />
					</div>
				</div>
			</BrowserRouter>
		);
  }
}

export default App
