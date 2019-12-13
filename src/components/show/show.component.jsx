import React from 'react';

import './show.styles.scss';

const Show = ({title, releaseDate, imgUrl, season, episode}) => (
	<div className='show'>
		<div>
			<img className='image' src={imgUrl} alt='' />
		</div>
		<div>
			<p className='title'>{title}</p>
			<p className='release-date'>{releaseDate.substring(0,4)}</p>
			<p className='season-episode-info'>Season: {season} Episode: {episode}</p>
		</div>
	</div>
);

export default Show;