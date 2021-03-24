import React, { Component } from 'react'
import RentalList from './components/rental/RentalList';

import Header from './shared/Header'

class App extends Component {
  render () {
    return (
			<div>
				<Header />
				<div className='container'>
					<RentalList />
				</div>
			</div>
		);
  }
}

export default App
