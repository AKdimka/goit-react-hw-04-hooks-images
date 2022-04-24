import { Button } from "./Button.styled";
import PropTypes from "prop-types";
import * as Scroll from 'react-scroll';

export function ShowMoreBtn({ setPage }) {
	const showMore = () => {
		setPage(state => state + 1);
		Scroll.animateScroll.scrollToBottom({ duration: 1000 });
	}
	return (
		<Button onClick={showMore}>Показать ещё</Button>
	)
}

ShowMoreBtn.propTypes = {
	setPage: PropTypes.func.isRequired,
}