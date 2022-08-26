import React from 'react';
import './MovieItem.css';

type MovieItemProps = {
	title: string;
	year: string;
	poster: string;
};

export const MovieItem: React.FC<MovieItemProps> = ({ title, year, poster }) => {
	return (
		<div className="movie-item">
			<h2 className="movie-item-title">Назва фільму: {title}</h2>
			<h2 className="movie-item-year">Рік фільму: {year}</h2>
			<img src={poster} alt="movie" />
		</div>
	);
};
