import './style.css';
import popMovies from './modules/popup.js';
import Get from './modules/get.js';

window.onload = () => {
  Get.getShows();
};
