/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';
import sprites from '../assets/img/sprite.svg';

const Header = () => {
	console.count('Header :');
	return (
		<Navbar as='nav' expand='lg' className='navbar-dark'>
			<Container>
				<NavbarBrand as={NavLink} to='/'>
					BookWithMe
				</NavbarBrand>
				<Form inline className='my-2 my-lg-0'>
					<FormControl
						type='search'
						className='mr-sm-2 bwm-search'
						placeholder='Try New York'></FormControl>
					<Button variant='bwm-search' type='submit'>
						<svg className='search-icon'>
							<use xlinkHref={`${sprites}#icon-search`}></use>
						</svg>
					</Button>
				</Form>
				<NavbarToggle aria-controls='navbarNavAltMarkup'></NavbarToggle>
				<NavbarCollapse id='navbarNavAltMarkup'>
					<div className='navbar-nav ml-auto'>
						<Nav.Link as={NavLink} to='/login' >Login</Nav.Link>
						<Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
					</div>
				</NavbarCollapse>
			</Container>
		</Navbar>
	);
};

export default Header;
