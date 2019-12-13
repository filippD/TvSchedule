import React from 'react';

import './day-schedule.styles.scss';

import { MONTHS_MAP, SCHEDULE } from '../../constants/constants';

import Show from '../show/show.component';

class DaySchedule extends React.Component {

	render() {
		return (
			<div className='day-schedule'>
				<p className='date'>{ this.props.day } { MONTHS_MAP[this.props.month] } { this.props.year }</p>
				<div className='show-list'>
					{
						SCHEDULE.map(show => (
							<Show 
								title={show.show.name}
								releaseDate={show.show.premiered}
								imgUrl={show.show.image.medium}
								season={show.season}
								episode={show.number}
							/>
						))
					}
				</div>
			</div>
		);
	};
};

export default DaySchedule;