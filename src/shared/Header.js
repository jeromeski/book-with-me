/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import sprites from '../assets/img/sprite.svg';

const Header = () => {
	console.count('Header :');
	return (
		<nav className='navbar navbar-dark navbar-expand-lg'>
			<div className='container'>
				<a className='navbar-brand' href=''>
					BookWithMe
				</a>
				<form className='form-inline my-2 my-lg-0'>
					<input
						className='form-control mr-sm-2 bwm-search'
						type='search'
						placeholder='Try New York'
						aria-label='Search'></input>
					<button className='btn-bwm-search' type='submit'>
						<svg className='search-icon'>
							<use xlinkHref={`${sprites}#icon-search`}></use>
						</svg>
					</button>
				</form>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav ml-auto'>
						<a className='nav-item nav-link active' href=''>
							Login <span className='sr-only'>(current)</span>
						</a>
						<a className='nav-item nav-link' href=''>
							Register
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
