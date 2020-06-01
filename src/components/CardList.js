import React from 'react';
import Card from './Card';

const CardList = ({robots, toggleModal}) => {
	return (
		<div>
			{
				robots.map((robot, i) => {
					return (
						<Card
							key={robots[i].id}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
							toggle={toggleModal}
						/>
					);
				})
			}
  		</div>
	);
}

export default CardList;