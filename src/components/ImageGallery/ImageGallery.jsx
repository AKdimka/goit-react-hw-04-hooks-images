import { Component } from "react";
import { Gallery } from "./ImageGallary.styled";
import { Loader } from "../Loader/Loader";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ShowMoreBtn } from "../Button/Button";


export class ImageGallary extends Component {
	state = {
		images: null,
		status: 'idle',
		imgPerPage: 12,
	}

	componentDidUpdate(prP, prS) {
		const newSearch = this.props.value;
		const oldSearch = prP.value;

		if (newSearch !== oldSearch) {
			const key = '25269285-81eb312f3fd9664086502c303';
			const imgPerPage = String(this.state.imgPerPage)

			this.setState({ status: 'pending' })

			fetch(`https://pixabay.com/api/?q=${newSearch}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=${imgPerPage}`)
				.then(r => r.json())
				.then(images => this.setState({ images: images.hits }))
				.finally(() => this.setState({ status: 'resolve' }))
		}
	}

	showMoreClick = () => {
		this.setState(({ imgPerPage }) => ({ imgPerPage: imgPerPage + 12 }))
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
						{images.map(({ id, webformatURL, largeImageURL, tags }) => (
							<ImageGalleryItem
								key={id}
								miniImg={webformatURL}
								bigImg={largeImageURL}
								alt={tags}
							/>
						))}
					</ Gallery>
					{this.state.images.length &&
						< ShowMoreBtn onClick={this.showMoreClick} />}
				</>)
		}
	}
}