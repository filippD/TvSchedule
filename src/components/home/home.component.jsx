import React from 'react';

import './home.styles.scss';

import Calendar from '../calendar/calendar.component';
import { ReactComponent as TVIcon } from '../../assets/icons/tv.svg';

const Home = () => (
	<div className='home' >
		<div className='main-home-div'>
			<TVIcon className='tv-icon' />
			<p className='info-text'>Для получения списка сериалов, пожалуйста выберите необходимый месяц и день.</p>
		</div>
		<div className='calendar'>
			<Calendar />
		</div>
	</div>
);

export default Home;