import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { countImagesPerPage, getImagesByQuery } from './js/pixabay-api.js';
import {
  moreBtn,
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const toastParam = {
  messageColor: 'white',
  backgroundColor: 'red',
  position: 'center',
  progressBar: false,
  timeout: 4000,
};

const form = document.querySelector('.form');

let curPage = 1;
let countPages = 1;
let query = '';
let heightImage = 0;

form.addEventListener('submit', onSubmit);
moreBtn.addEventListener('click', onMoreBtnClick);

async function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  const queryElem = event.target.elements['search-text'];
  if (!queryElem.value.trim()) {
    queryElem.value = '';
    return;
  }
  curPage = 1;
  query = queryElem.value;
  hideLoadMoreButton();
  showLoader();
  try {
    const photo = await getImagesByQuery(query, curPage);
    if (!photo.hits.length) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        ...toastParam,
      });
      return;
    }
    countPages = Math.ceil(photo.totalHits / countImagesPerPage);
    createGallery(photo.hits);
    checkMoreButton();
    event.target.reset();
    const galleryItem = document.querySelector('.gallery-item');
    heightImage = galleryItem.getBoundingClientRect().height * 2;
  } catch (error) {
    console.error(error);
    iziToast.show({
      message: 'Server Pixabay is not avialible',
      ...toastParam,
    });
  } finally {
    hideLoader();
  }
}

async function onMoreBtnClick(event) {
  curPage += 1;
  hideLoadMoreButton();
  showLoader();
  try {
    const photo = await getImagesByQuery(query, curPage);
    createGallery(photo.hits);
    scrollGallery(1);
    checkMoreButton();
  } catch (error) {
    console.error(error);
    iziToast.show({
      message: 'Server Pixabay is not avialible',
      ...toastParam,
    });
  }
  hideLoader();
}

function checkMoreButton() {
  if (curPage < countPages) {
    showLoadMoreButton();
  } else {
    iziToast.show({
      message: `We're sorry, but you've reached the end of search results.`,
      ...toastParam,
    });
  }
}

function scrollGallery(dir) {
  window.scrollBy({
    top: heightImage * dir,
    behavior: 'smooth',
  });
}

// колесо
window.addEventListener(
  'wheel',
  e => {
    e.preventDefault();
    scrollGallery(e.deltaY > 0 ? 1 : -1);
  },
  { passive: false }
);

// клавиши
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    scrollGallery(1);
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    scrollGallery(-1);
  }
});
