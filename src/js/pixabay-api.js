import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const countImagesPerPage = 15;

export async function getImagesByQuery(query, pages) {
  const params = {
    key: '55960662-5976d34f2ed07da81c3dd4b18',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: countImagesPerPage,
    page: pages,
  };
  const res = await axios.get(BASE_URL, { params });
  return res.data;
}
