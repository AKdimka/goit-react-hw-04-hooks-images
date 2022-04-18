import { Component } from "react";
import { Searchbar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";
import PropTypes from "prop-types";

export class Serchbar extends Component {
	static propTypes = {
		searchSubmit: PropTypes.func.isRequired,
	}

	state = {
		search: '',
	}

	serchInputChange = e => {
		const normalizedSearchWord = e.currentTarget.value.toLowerCase();
		this.setState({ search: normalizedSearchWord })
	}

	handleSubmit = e => {
		e.preventDefault()
		if (this.state.search.trim() === '') {
			return
		}
		this.props.searchSubmit(this.state.search);
		this.setState({ search: '' });
	}

	render() {
		return (
			<Searchbar>
				<SearchForm onSubmit={this.handleSubmit}>
					<SearchFormButton type="submit">
						<SearchFormButtonLabel>Search</SearchFormButtonLabel>
					</SearchFormButton>

					<SearchFormInput
						value={this.state.search}
						type="text"
						autocomplete="off"
						autoFocus
						placeholder="Search images and photos"
						onChange={this.serchInputChange}
					/>
				</SearchForm>
			</Searchbar>
		)
	}
}