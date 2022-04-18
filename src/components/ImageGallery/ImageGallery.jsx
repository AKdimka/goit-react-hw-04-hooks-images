import { Gallery } from "./ImageGallary.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export function ImageGallary({ imgs }) {
	return (
		<>
			< Gallery >
				{imgs.map(({ id, webformatURL, largeImageURL, tags }) =>
					<ImageGalleryItem
						key={id}
						miniImg={webformatURL}
						bigImg={largeImageURL}
						alt={tags}
					/>
				)}
			</ Gallery>
		</>)
}

ImageGallary.propTypes = {
	imgs: PropTypes.arrayOf(PropTypes.object),
}