import React from 'react';

import './show.styles.scss';

class Show extends React.Component {

	constructor() {
		super();
		this.state = {
			hidden: true
		};
	};

	toggleHidden = () => {
		this.setState({ hidden: !this.state.hidden })
	}

	render() {
		const { imgUrl, title, releaseDate, season, episode, bigImgUrl } = this.props;
		return (
			<div className='show'>
				<div>
					<img onClick={this.toggleHidden} className='image' src={imgUrl} alt='' />
				</div>
				<div>
					<p className='title'>{title}</p>
					<p className='release-date'>{releaseDate.substring(0,4)}</p>
					<p className='season-episode-info'>Сезон: {season} Эпизод: {episode}</p>
				</div>
				{ 
				this.state.hidden ? null 
				: 
				<img onClick={this.toggleHidden} className='big-img' src={bigImgUrl} alt='' /> 
				}
			</div>
		)
	}
	
};

export default Show;