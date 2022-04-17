import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent } from "./Modal.styled";
import PropTypes from "prop-types";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
	static propTypes = {
		img: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		onClose: PropTypes.func.isRequired,
	}
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown)
	}

	handleKeyDown = e => {
		if (e.code === 'Escape') {
			this.props.onClose();
		}
	}

	backdropClick = e => {
		if (e.target === e.currentTarget) {
			this.props.onClose()
		}
	}

	render() {
		return createPortal(
			<Overlay onClick={this.backdropClick}>
				<ModalContent>
					<img src={this.props.img} alt={this.props.alt} />
				</ModalContent>
			</Overlay>,
			modalRoot)
	}
}