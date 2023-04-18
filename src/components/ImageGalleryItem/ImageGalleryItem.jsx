import { useCustomContext } from "context/Context";
import { GalleryItem, ItemImg } from "./ImageGallertItem.styled";
import PropTypes from 'prop-types'

export const ImageGalleryItem = ({ images }) => {
  const { setLargeImageUrl } = useCustomContext();
  const { setIsShownModal } = useCustomContext();
  const openModal = (imgUrl) => {
    setLargeImageUrl(imgUrl);
    setIsShownModal(true);
  }
  return images.length ? images.map(img => (<GalleryItem key={img.id} onClick={() => openModal(img.largeImageURL)}><ItemImg src={img.webformatURL} alt="" /></GalleryItem>)) : null;
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
}
