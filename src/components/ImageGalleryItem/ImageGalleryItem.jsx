import { Modal } from "../Modal/Modal";
import { ImageGallaryItem, ImageGalleryItemImage } from "./ImageGallaryItem.styled";
//import PropTypes from "prop-types";

export const ImageGalleryItem = ({ miniImg, alt, bigImg, modalVisible, toggleModal }) => {
	/* 	static propTypes = {
			miniImg: PropTypes.string.isRequired,
			bigImg: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		} */

	return (
		<>
			<ImageGallaryItem>
				<ImageGalleryItemImage
					src={miniImg}
					alt={alt}
					onClick={toggleModal} />
				{modalVisible &&
					(<Modal
						img={bigImg}
						alt={alt}
						onClose={toggleModal} />)}
			</ImageGallaryItem>
		</>)
}
