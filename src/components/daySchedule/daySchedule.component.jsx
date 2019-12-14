import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import './day-schedule.styles.scss';

import { API_URL } from '../../constants/constants';
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
			canLoadMore: false
		};
	};

	componentDidMount() {
		const ISOdate = moment(this.props.date).toISOString().slice(0,10);
		this.setState({loading: true});

		fetch(`${API_URL}?country=US&date=${ISOdate}`, { method: 'get' })
		.then(res => res.json())
		.then(shows => this.setState({shows: shows, loading: false}))
		.then(res => this.setState({canLoadMore: this.state.shows.length>2}))
		.catch(err => this.setState({loading: false, error: err}))
	};

	onButtonClick = () => {
		const { canLoadMore, shows, limit } = this.state;

		if ( !canLoadMore ) {
			this.setState({ 
				limit: 2,
				canLoadMore: shows.length>2
			})
			return;
		};
		if (shows.length >= limit+2) {
			const newLimit = limit+2
			this.setState({
				limit: newLimit,
				canLoadMore: shows.length>newLimit
			});
		} else {
			const newLimit = limit+1
			this.setState({
				limit: newLimit,
				canLoadMore: shows.length>newLimit
			});
		};
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
		const { loading, shows, limit, canLoadMore } = this.state;
		shows.filter(show => show !== null)
		return (
			<div className='day-schedule'>
				<p className='date'>{ moment(this.props.date).locale('ru').format('LL') }</p>
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
									imgUrl={show.show.image ? show.show.image.medium : 'https://via.placeholder.com/80x110'}
									bigImgUrl={show.show.image ? show.show.image.original : 'https://via.placeholder.com/300x440'}
									season={show.season}
									episode={show.number}
								/>
							))
						}
					</div>
					{ this.state.shows.length > 2 ?
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
					: null
					}
				</div>
				}
			</div>
		);
	};
};

export default DaySchedule;