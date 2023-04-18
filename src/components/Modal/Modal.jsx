import { useEffect } from 'react';
import { useCustomContext } from 'context/Context';
import { ModalOverlay, StyledModal, ModalImg } from './Modal.styled';

export const Modal = () => {
  const { largeImageUrl, isShownModal, setLargeImageUrl, setIsShownModal } = useCustomContext();
  const handlPressEsc = (e) => {
    if (e.code === "Escape") {
      setIsShownModal(false);
      setLargeImageUrl('');
    }
  };
  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      setIsShownModal(false);
      setLargeImageUrl('');
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handlPressEsc);
  
    return () => {
      window.removeEventListener("keydown", handlPressEsc)
    }
  }, []);
  return (
    isShownModal && <ModalOverlay onClick={handleClick}>
    <StyledModal>
      <ModalImg src={largeImageUrl} alt="" />
      </StyledModal>
    </ModalOverlay >
    )
}