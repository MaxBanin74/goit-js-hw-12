import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const toastParam = {
  messageColor: 'white',
  backgroundColor: 'red',
  position: 'center',
  progressBar: false,
  timeout: 4000,
};

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  const queryElem = event.target.elements['search-text'];
  if (!queryElem.value.trim()) {
    queryElem.value = '';
    return;
  }
  showLoader();
  getImagesByQuery(queryElem.value)
    .then(photo => {
      if (!photo.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          ...toastParam,
        });
        return;
      }
      createGallery(photo);
      event.target.reset();
    })
    .catch(error => {
      console.error(error);
      iziToast.show({
        message: 'Server Pixabay is not avialible',
        ...toastParam,
      });
    })
    .finally(() => {
      hideLoader();
    });
}
