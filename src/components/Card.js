import React from 'react';

const Card = ({name, email, id, toggle}) => {
	return (
		<div className='tc bg-light-green dib br3 ma1 grow bw1 shadow-5 w-20' onClick={toggle} id={id}>
			<img alt='robot' src={`https://robohash.org//${id}?size=200x200`}/>
			<div>
				<h5><strong>{name}</strong></h5>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;