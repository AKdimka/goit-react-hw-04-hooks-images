import { ImageGallaryItem, ImageGalleryItemImage } from "./ImageGallaryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ miniImg, alt, bigImg, openModal }) => {
	return (
		<>
			<ImageGallaryItem>
				<ImageGalleryItemImage
					src={miniImg}
					alt={alt}
					onClick={() => openModal(bigImg, alt)} />
			</ImageGallaryItem>
		</>)
}

ImageGalleryItem.propTypes = {
	miniImg: PropTypes.string.isRequired,
	bigImg: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	openModal: PropTypes.func.isRequired,
}