import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent } from "./Modal.styled";
import PropTypes from "prop-types";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ img, alt, onClose }) => {
	const closeModal = e => {
		if (e.code === 'Escape' || e.target === e.currentTarget) {
			onClose(false);
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', closeModal);
		return window.removeEventListener('keydown', closeModal)
	})

	return createPortal(
		<Overlay onClick={closeModal}>
			<ModalContent>
				<img src={img} alt={alt} />
			</ModalContent>
		</Overlay>,
		modalRoot)
}

Modal.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
}