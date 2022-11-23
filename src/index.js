import './style.css';
import Get from './modules/get.js';
import Counters from './modules/counters.js';

// making sure the widow is loaded then all data is provided.
window.onload = async () => {
  await Get.getShows();
  setTimeout(() => {
    Counters.itemsCounter();
  }, '5000');
};
