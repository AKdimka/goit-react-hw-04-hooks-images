import { Gallery } from "./ImageGallary.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export function ImageGallary({ imgs, modalVisible, toggleModal }) {
	return (
		<>
			< Gallery >
				{imgs.map(({ id, webformatURL, largeImageURL, tags }) =>
					<ImageGalleryItem
						key={id}
						miniImg={webformatURL}
						bigImg={largeImageURL}
						alt={tags}
						modalVisible={modalVisible}
						toggleModal={toggleModal}
					/>
				)}
			</ Gallery>
		</>)
}

ImageGallary.propTypes = {
	imgs: PropTypes.arrayOf(PropTypes.object),
}