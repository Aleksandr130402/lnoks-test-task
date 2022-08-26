import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import './App.css';
import MoviesService from '../../service/MoviesService';
import { AppDto, SearchItemsDto } from './App.dto';
import { SearchPanel } from '../SearchPanel';
import { MovieItems } from '../MovieItems';

function App() {
	const [movies, setMovies] = useState<SearchItemsDto[]>([]);
	const [filteredMovies, setFilteredMovies] = useState<SearchItemsDto[] | null>(null);
	const [searchValue, setSearchValue] = useState<string>('');

	const moviesService = new MoviesService();

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	//повертаємо масив фільмів, назви яких співпали з searchValue
	const findMovie = () => {
		return movies.filter((item) => item.Title.toLowerCase().includes(searchValue.toLowerCase()));
	};

	useEffect(() => {
		(async () => {
			const data = (await moviesService.getResource()) as AppDto;
			setMovies(data.Search);
		})();
	}, []);

	useEffect(() => {
		console.log(movies);
	}, [movies]);

	useEffect(() => {
		setFilteredMovies(null);
		if (searchValue.length > 0) {
			setFilteredMovies(findMovie());
		}
	}, [searchValue]);

	return (
		<div className="container">
			<SearchPanel searchValue={searchValue} handleOnChange={(e) => handleOnChange(e)} />

			{filteredMovies ? (
				<>
					<h2>Результати пошуку: {filteredMovies!.length}.</h2>
					<MovieItems items={filteredMovies} />
				</>
			) : (
				<h2>Введіть щось для пошуку.</h2>
			)}
		</div>
	);
}

export default App;
