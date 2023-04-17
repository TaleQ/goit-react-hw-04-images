import { LoadMoreBtn } from "./Button.styled";
import PropTypes from 'prop-types'

export const Button = ({ onClick }) => (
  <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}
