import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import moment from 'moment';
import './schedules.styles.scss';

import DaySchedule from '../daySchedule/daySchedule.component';

class Schedules extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            dates: [],
            nextDate: this.props.match.params.startDate
        };
    };

    addDates = () => {
		const date =  this.state.nextDate;
		let nextDay = moment(date).subtract(1, 'days');
    	this.setState({
    		dates: [...this.state.dates, date],
    		nextDate: nextDay
    	});
    }

	render() {
		const items = [];
        this.state.dates.forEach((date, i) => {
            items.push(
                <DaySchedule key={i} date={date} />
            );
        });

		return (
			<div className='schedules' >
				<InfiniteScroll
				    pageStart={0}
				    loadMore={this.addDates}
				    hasMore={true}
				    loader={<div className="loader" key={0}>Loading ...</div>}
				>
				    {items}
				</InfiniteScroll>
			</div>
		);
	};
};

export default Schedules;