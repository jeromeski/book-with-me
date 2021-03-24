import React, { Component } from 'react';
import RentalCard from './RentalCard';

class RentalList extends Component {
	constructor() {
		super();
		this.state = {
			rentals: [1, 2, 3]
		};
		// I am binding the context of 'this' to this class of this function.
		// this.addRental = this.addRental.bind(this);
	}

	renderRentals() {
		return this.state.rentals.map((rental, idx) => (
			<RentalCard key={idx} colNum={'col-md-3 col-xs-6'} />
		));
	}

	render() {
		console.count('RenderList :');
		return (
			<section id='rentalListing'>
				<h1 className='page-title'>Your Home All Around the World</h1>
				<div className='row'>{this.renderRentals()}</div>
			</section>
		);
	}
}

export default RentalList;