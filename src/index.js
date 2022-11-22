import './style.css';
import Get from './modules/get.js';

const body = document.querySelector('.body');
window.onload = () => {
  Get.getShows();
};
