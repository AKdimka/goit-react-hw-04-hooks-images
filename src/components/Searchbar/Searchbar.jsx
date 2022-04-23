import { useState } from "react";
import { SearchbarSt, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";
import PropTypes from "prop-types";

export function Searchbar({ setSearch, setPage }) {
	const [keyWord, setKeyWord] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (keyWord.trim() === '') {
			return
		}
		const normKeyWord = keyWord.toLowerCase();
		setSearch(normKeyWord);
		setPage(1);
		setKeyWord('')
	}

	return (
		<SearchbarSt>
			<SearchForm onSubmit={handleSubmit}>
				<SearchFormButton type="submit">
					<SearchFormButtonLabel>Search</SearchFormButtonLabel>
				</SearchFormButton>

				<SearchFormInput
					value={keyWord}
					type="text"
					autocomplete="off"
					autoFocus
					placeholder="Search images and photos"
					onChange={e => setKeyWord(e.target.value)}
				/>
			</SearchForm>
		</SearchbarSt>
	)
}

Searchbar.propTypes = {
	setSearch: PropTypes.func.isRequired,
	setPage: PropTypes.func.isRequired,
} 