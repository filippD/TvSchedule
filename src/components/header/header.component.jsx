import React from 'react';

import './header.styles.scss';

import { ReactComponent as BackIcon } from '../../assets/icons/left-arrow.svg';

const Header = () => (
	<header className='header'>
		<BackIcon className='back-icon' />
		<h1 className='logo' >SUPER FILM</h1>
	</header>
); 

export default Header;