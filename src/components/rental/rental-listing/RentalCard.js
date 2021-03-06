/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const RentalCard = (props) => {
  const {
		colNum,
		id,
		image,
		title,
		city,
		description,
		dailyRate,
		history,
		category,
		shared
	} = props;
	const handleInnerLink = () => {
		history.push(`/rentals/${id}`);
	};

 	return (
		<div className={colNum}>
			<Link className='rental-detail-link' to={`/rentals/${id}`}>
				<div className='card bwm-card'>
					<img className='card-img-top' src={image} alt='rental main'></img>
					<div className='card-block'>
						<h6 className={`card-subtitle ${category}`}>
							{shared ? 'shared' : 'whole'} &nbsp;
							{category} &#183; {city}
						</h6>
						<h4 className='card-title'>{title}</h4>
						<p className='card-text'>${dailyRate} per Night &#183; Free Cancelation</p>
						<span onClick={handleInnerLink} className='card-link'>
							More Info
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default withRouter(RentalCard);
