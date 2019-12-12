import React from 'react';

import './show.styles.scss';

const Show = ({title, realeaseDate, imgUrl, season, episode}) => (
	<div className='show'>
		<div>
			<img className='image' src={imgUrl} alt='' />
		</div>
		<div>
			<h3>{title}</h3>
			<p>{realeaseDate}</p>
			<div className='season-episode-info'>
				<p>Season: {season} Episode: {episode}</p>
			</div>
		</div>
	</div>
);

export default Show;