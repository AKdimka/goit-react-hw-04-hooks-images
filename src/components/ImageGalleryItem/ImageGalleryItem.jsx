import { Component } from "react";
import { Modal } from "../Modal/Modal";
import { ImageGallaryItem, ImageGalleryItemImage } from "./ImageGallaryItem.styled";


export class ImageGalleryItem extends Component {
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
		console.log(bigImg);
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