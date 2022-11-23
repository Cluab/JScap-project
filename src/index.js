import './style.css';
import Get from './modules/get.js';

// making sure the widow is loaded then all data is provided.
window.onload = () => {
  Get.getShows();
};
