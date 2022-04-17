import { Button } from "./Button.styled";
import PropTypes from "prop-types";

export function ShowMoreBtn({ onClick }) {
	return (
		<Button onClick={onClick}>Показать ещё</Button>
	)
}

ShowMoreBtn.propTypes = {
	onClick: PropTypes.func.isRequired,
}