import { ImageGallaryItem, ImageGalleryItemImage } from "./ImageGallaryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ miniImg, alt, bigImg, toggleModal }) => {
	return (
		<>
			<ImageGallaryItem>
				<ImageGalleryItemImage
					src={miniImg}
					alt={alt}
					onClick={() => toggleModal(bigImg, alt)} />
			</ImageGallaryItem>
		</>)
}

ImageGalleryItem.propTypes = {
	miniImg: PropTypes.string.isRequired,
	bigImg: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired,
}