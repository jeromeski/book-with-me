import React, { Component } from 'react';

class RentalDetail extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return <div>{this.props.match.params.id}</div>;
	}
}

export default RentalDetail;
