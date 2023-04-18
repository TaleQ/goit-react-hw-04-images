import { useState, useEffect } from 'react';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from 'api/Api';
import { Notify } from 'notiflix';
import { ModalContext } from 'context/Context';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [totalHits, setTotalHits] = useState('');

  useEffect(() => {
    const getImages = async () => {
    setIsLoading(true);
    try {
      const data = await fetchImages(searchQuery, page);
      if (data.hits.length === 0) {
        Notify.failure('No images found');
      } else {
        setImages(data.hits);
        setPage(p => p + 1);
        setTotalHits(data.totalHits);
      }
    } catch (error) {
      setSearchError(error);
      console.log(searchError);
    } finally {
      setIsLoading(false);
    }
  };
    if (searchQuery) {
      getImages();
    }
  }, [searchQuery]);

  const loadMoreImg = async () => {
    setIsLoading(true);
    try {
      const data = await fetchImages(searchQuery, page);
      setImages([...images, ...data.hits]);
      setPage(page + 1);
    } catch (error) {
      setSearchError(error);
      console.log(searchError);
    } finally {
      setIsLoading(false);
    }
  };

  const searchFormSubmit = newSearchQuery => {
    if (newSearchQuery === searchQuery) {
      Notify.info(
        `Results for query "${newSearchQuery}" are already shown. Press "Load more" to see more images`
      );
      return;
    } else {
      setImages([]);
      setSearchQuery(newSearchQuery);
      setPage(1);
    }
  };

  return (
    <Wrapper>
      <SearchBar onSubmit={searchFormSubmit}></SearchBar>
      <ModalContext>
      <div>
        {isLoading && <Loader />}
        <ImageGallery>
          {images.length > 0 ? (
            <ImageGalleryItem images={images} />
          ) : null}
        </ImageGallery>
      </div>
      {images.length > 0 && images.length < totalHits ? (
        <Button onClick={loadMoreImg}></Button>
      ) : null}
      <Modal/>
      </ModalContext>
    </Wrapper>
  );
};
