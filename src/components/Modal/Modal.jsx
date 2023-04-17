import { Component } from 'react';
import { ModalOverlay, StyledModal, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types'

export class Modal extends Component {
  state = {

  };
  componentDidMount() {
    window.addEventListener("keydown", this.handlPressEsc);
  };
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlPressEsc)
  };
  handlPressEsc = (e) => {
    if (e.code === "Escape") {
      this.props.hideModal()
    }
  };
  handleClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.hideModal();
    }
  }
  render() {
    return (
    <ModalOverlay onClick={this.handleClick}>
    <StyledModal>
      <ModalImg src={this.props.imgUrl} alt="" />
    </StyledModal>
  </ModalOverlay>
    )
  }
}

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired
}