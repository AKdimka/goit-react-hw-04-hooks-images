import { Button } from "./Button.styled";
import PropTypes from "prop-types";

export function ShowMoreBtn({ setPage }) {
	return (
		<Button onClick={() => setPage(state => state + 1)}>Показать ещё</Button>
	)
}

ShowMoreBtn.propTypes = {
	setPage: PropTypes.func.isRequired,
}