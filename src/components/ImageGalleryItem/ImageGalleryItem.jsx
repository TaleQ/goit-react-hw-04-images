import { GalleryItem, ItemImg } from "./ImageGallertItem.styled";
import PropTypes from 'prop-types'

export const ImageGalleryItem = ({ images, onClick }) => { return images.map(img => (<GalleryItem key={img.id} onClick={()=> onClick(img.largeImageURL)}><ItemImg src={img.webformatURL} alt="" /></GalleryItem>)) };


ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}
