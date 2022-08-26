import React, { Fragment } from 'react';
import { SearchItemsDto } from '../App/App.dto';
import { MovieItem } from '../MovieItem';
import './MovieItems.css';

type MovieItemsProps = {
	items: SearchItemsDto[] | null;
};

export const MovieItems: React.FC<MovieItemsProps> = ({ items }) => {
	return (
		<div className="movie-items">
			{items!.length > 0 ? (
				items!.map((item, key) => (
					<Fragment key={key}>
						<MovieItem title={item.Title} year={item.Year} poster={item.Poster} />
					</Fragment>
				))
			) : (
				<h2>Нічого не знайдено(</h2>
			)}
		</div>
	);
};
