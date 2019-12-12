import React from 'react';

import './schedules.styles.scss';

import DaySchedule from '../daySchedule/daySchedule.component';

const Schedules = () => {
	const date = new Date;
	return (
	<div className='schedules' >
		<DaySchedule day={date.getDay()} month={date.getMonth()} year={date.getFullYear()} />
	</div>
)};

export default Schedules;