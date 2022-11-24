import './style.css';
import Get from './modules/get.js';
import Counters from './modules/counters.js';
import Showsection from './modules/nav.js';

Showsection.showList(); // switch to list section as default.
document.getElementById('home').addEventListener('click', () => {
  Showsection.showList(); // switch to list section.
});
document.getElementById('contact').addEventListener('click', () => {
  Showsection.showcontact(); // switch to contact section.
});
document.getElementById('about').addEventListener('click', () => {
  Showsection.showabout(); // switch about section.
});

// making sure the widow is loaded then all data is provided.
window.onload = async () => {
  await Get.getShows();
  setTimeout(() => {
    Counters.itemsCounter();
  }, '5000');
};
