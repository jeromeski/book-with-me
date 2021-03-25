import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class RentalDetail extends Component {
	componentDidMount() {
		const rentalId = this.props.match.params.id;
		this.props.dispatch(actions.fetchRentalById(rentalId));
	}
	render() {
		const {
			bedrooms,
			category,
			city,
			createdAt,
			dailyRate,
			description,
			id,
			image,
			shared,
			street,
			title
		} = this.props.rental;
		if (id) {
			return (
				<div>
					<h1>{title}</h1>
					<h1>{city}</h1>
					<h1>{description}</h1>
					<h1>${dailyRate}</h1>
				</div>
			);
		} else {
			return <h1>Loading...</h1>;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		rental: state.rental.data
	};
};

export default connect(mapStateToProps)(RentalDetail);
