import React, { Component } from 'react'
import RentalCard from './components/rental/RentalCard';
import Header from './shared/Header'

class App extends Component {
  render () {
    return (
			<div>
				<Header />
				<div className='container'>
					<section id='rentalListing'>
						<h1 className='page-title'>Your Home All Around the World</h1>
						<div className='row'>
							<RentalCard />
							<RentalCard />
							<RentalCard />
						</div>
					</section>
				</div>
			</div>
		);
  }
}

export default App
