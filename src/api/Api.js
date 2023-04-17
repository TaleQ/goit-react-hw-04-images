import axios from "axios";

export const fetchImages = async (searchQuery, page) => {
  const params = {
        key: '33623115-47a36c1983cc36082c4bb974d',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page,
      };
  const searchParams = new URLSearchParams(params);
  const response = await axios.get(`https://pixabay.com/api/?${searchParams.toString()}`);
  return response.data;
};