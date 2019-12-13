import React from 'react';
import { useHistory } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as BackIcon } from '../../assets/icons/left-arrow.svg';

const Header = (props) => {
	const history = useHistory();
	return (
		<header className='header'>
			{
				history.location.pathname === '/' ? null :
				<BackIcon onClick={() => history.push('/')} className='back-icon' />
			}
			
			<h1 className='logo' >SUPER FILM</h1>
		</header>
)}; 

export default Header;