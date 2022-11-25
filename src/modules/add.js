import popMovies from './popup.js';

export default class AddMovies {
  constructor(show, likes) {
    this.show = show;
    this.likes = likes;
  }

  // this function is for adding shows to the website
  static addlist = (list, id) => {
    // creating html elements and getting the section id
    const shows = document.getElementById('show-cards');
    const container = document.createElement('div');
    const showImg = document.createElement('img');
    const cardHouse = document.createElement('div');
    const title = document.createElement('h5');
    const description = document.createElement('div');
    const button = document.createElement('a');
    const likesHouse = document.createElement('div');
    const likesP = document.createElement('p');
    const count = 0;

    // adding classes to different elements

    container.classList.add('card');
    showImg.classList.add('card-img-top');
    cardHouse.classList.add('card-body');
    title.classList.add('card-title');
    description.classList.add('card-text');
    likesHouse.classList.add('likes');
    button.classList.add('btn', 'btn-primary');
    container.setAttribute('style', 'max-width: 100%;');

    // assigning api variables to deferent elements

    showImg.src = `${list.image.medium}`;
    showImg.alt = 'show image';
    title.innerText = list.name;
    let sum = list.summary;
    sum = sum.replace(/^"(.*)"$/, '$1');
    description.innerHTML = `${sum}`;
    likesP.innerHTML = `<i class="fa-regular fa-heart"></i>likes <span>${count}</span>`;
    button.href = list.show;
    button.innerText = 'comments';

    // appending elements with each other

    likesHouse.appendChild(likesP);
    cardHouse.appendChild(title);
    cardHouse.appendChild(description);
    cardHouse.appendChild(likesHouse);
    cardHouse.appendChild(button);
    container.appendChild(showImg);
    container.appendChild(cardHouse);
    shows.appendChild(container);

    // eventListener for pop up window

    button.addEventListener('click', (e) => {
      e.preventDefault();
      popMovies.popWrap(list.image.medium, list.name, sum, id);
    });
  };
}
