import React, { ChangeEvent } from 'react';
import './SearchPanel.css';

type SearchPanelProps = {
	searchValue: string;
	handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchPanel: React.FC<SearchPanelProps> = ({ searchValue, handleOnChange }) => {
	return (
		<div className="search-panel">
			<input placeholder="search movie" value={searchValue} onChange={(e) => handleOnChange(e)} />
		</div>
	);
};
