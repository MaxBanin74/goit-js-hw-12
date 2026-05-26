import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: '55960662-5976d34f2ed07da81c3dd4b18',
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get(BASE_URL, { params }).then(response => response.data.hits);
}
