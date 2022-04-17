import { Component } from "react";
import { Gallery } from "./ImageGallary.styled";
import { Loader } from "../Loader/Loader";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ShowMoreBtn } from "../Button/Button";
import PropTypes from "prop-types";
import * as Scroll from 'react-scroll';


export class ImageGallary extends Component {
	static propTypes = {
		value: PropTypes.string.isRequired,
	}

	state = {
		images: [],
		status: 'idle',
		imgPerPage: 12,
	}

	componentDidUpdate(prP, prS) {
		const newSearch = this.props.value;
		const oldSearch = prP.value;
		const newPerPage = this.state.imgPerPage;
		const oldPewPage = prS.imgPerPage;

		if (oldSearch !== newSearch) {
			this.setState({ imgPerPage: 12 })
		}

		if (newSearch !== oldSearch || newPerPage !== oldPewPage) {
			const key = '25269285-81eb312f3fd9664086502c303';
			const perPage = String(this.state.imgPerPage)

			this.setState({ status: 'pending' })

			fetch(`https://pixabay.com/api/?q=${newSearch}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
				.then(r => r.json())
				.then(images => this.setState({ images: images.hits }))
				.finally(() => this.setState({ status: 'resolve' }))
		}
	}

	showMoreClick = () => {
		this.setState((state) => ({ imgPerPage: state.imgPerPage + 12 }));
		setTimeout(() => { console.log(this.state) }, 1);
		Scroll.animateScroll.scrollToBottom({ duration: 1500 });
	}

	render() {
		const { images, status } = this.state;

		if (status === 'idle') {
			return <h1>Что будем искать???</h1>
		}

		if (status === 'pending') {
			return <Loader />
		}

		if (status === 'resolve') {
			return (
				<>
					< Gallery >
						{images.map(({ id, webformatURL, largeImageURL, tags }) =>
							<ImageGalleryItem
								key={id}
								miniImg={webformatURL}
								bigImg={largeImageURL}
								alt={tags}
							/>
						)}
					</ Gallery>
					{this.state.images.length === 0 ?
						<h1> Картинок по вашему запросу не найдено ...</h1> :
						< ShowMoreBtn type="button" onClick={this.showMoreClick} />
					}
				</>)
		}
	}
}