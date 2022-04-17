import { Component } from "react";
import { Modal } from "../Modal/Modal";
import { ImageGallaryItem, ImageGalleryItemImage } from "./ImageGallaryItem.styled";
import PropTypes from "prop-types";


export class ImageGalleryItem extends Component {
	static propTypes = {
		miniImg: PropTypes.string.isRequired,
		bigImg: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}

	state = {
		modalVisible: false,
	}

	toggleModal = () => {
		this.setState(({ modalVisible }) => ({
			modalVisible: !modalVisible
		})
		)
	}

	render() {
		const { miniImg, alt, bigImg } = this.props;
		const { toggleModal } = this;
		return (
			<>
				<ImageGallaryItem>
					<ImageGalleryItemImage
						src={miniImg}
						alt={alt}
						onClick={toggleModal} />
					{this.state.modalVisible &&
						(<Modal
							img={bigImg}
							alt={alt}
							onClose={toggleModal} />)}
				</ImageGallaryItem>

			</>)
	}
}