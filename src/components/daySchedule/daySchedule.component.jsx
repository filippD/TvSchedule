import React from 'react';

import './day-schedule.styles.scss';

import { MONTHS_MAP, API_URL } from '../../constants/constants';
import { ReactComponent as DownArrowIcon } from '../../assets/icons/down-arrow.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/icons/up-arrow.svg';
import Show from '../show/show.component';

class DaySchedule extends React.Component {

	constructor() {
		super();
		this.state = {
			shows: [],
			loading: false,
			error: null,
			limit: 2,
			canLoadMore: true
		};
	};

	componentDidMount() {
		this.setState({loading: true});

		fetch(API_URL, { method: 'get' })
		.then(res => res.json())
		.then(shows => this.setState({shows: shows, loading: false}))
		.catch(err => this.setState({loading: false, error: err}))
	};

	onButtonClick = () => {
		if ( !this.state.canLoadMore ) {
			this.setState({ 
				limit: 2,
				canLoadMore: true
			});
			return
		}
		if (this.state.limit+3 === this.state.shows.length) {
			this.setState({ 
				limit: this.state.limit+3,
				canLoadMore: false
			});
			return
		}
		if (this.state.limit+2 === this.state.shows.length) {
			this.setState({ 
				limit: this.state.limit+2,
				canLoadMore: false
			});
			return
		}
		this.setState({ 
				limit: this.state.limit+2,
				canLoadMore: true
		});
		
	};

	getRightWord = () => {
		const num = this.state.shows.length - this.state.limit;
		const numArr = num.toString().split('');
		if (numArr.length === 2 && numArr[0] === '1') {
			return 'сериалов'; 
		}
		const lastNum = numArr[numArr.length-1];
		if ( lastNum === '1' ) {
			return 'сериал';
		} else if ( Number(lastNum) < 5 && lastNum !== '0') {
			return 'сериала';
		} else {
			return 'сериалов';
		}
	};

	render() {
		const {day, month, year } = this.props;
		const { loading, shows, limit, canLoadMore } = this.state;
		return (
			<div className='day-schedule'>
				<p className='date'>{ day } { MONTHS_MAP[month] } { year }</p>
				{
				loading ? <p>loading...</p>
				:
				<div className='shows-schedule'>
					<div className='show-list'>
						{
							shows.slice(0, limit).map(show => (
								<Show 
									key={show.id}
									title={show.show.name}
									releaseDate={show.show.premiered}
									imgUrl={show.show.image.medium}
									bigImgUrl={show.show.image.original}
									season={show.season}
									episode={show.number}
								/>
							))
						}
					</div>
					<button className='load-more' onClick={this.onButtonClick}>
						{
							canLoadMore ?
							<span>
								{`Еще ${shows.length-limit} ${this.getRightWord()}`}
								<DownArrowIcon className='arrow'/>
							</span>
							:
							<span>
								Показать основные
								<UpArrowIcon className='arrow'/>
							</span>
						}
					</button>
				</div>
				}
			</div>
		);
	};
};

export default DaySchedule;