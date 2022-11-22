export default class AddMovies {
  constructor(show, likes) {
    this.show = show;
    this.likes = likes;
  }

  static addlist = (list) => {
    const shows = document.getElementById('show-cards');
    const container = document.createElement('div');
    const showImg = document.createElement('img');
    const cardHouse = document.createElement('div');
    const title = document.createElement('h5');
    const description = document.createElement('p');
    const button = document.createElement('a');
    container.classList.add('card');
    container.setAttribute('style', 'width: 18rem;');
    showImg.classList.add('card-img-top');
    showImg.src = list.show.image.medium;
    showImg.alt = 'show image';
    cardHouse.classList.add('card-body');
    title.classList.add('card-title');
    title.innerText(list.show.name);
    description.classList.add('card-text');
    description.innerText(list.show.summary);
    button.classList.add('btn', 'btn-primary');
    button.href = list.show.url;
    button.innerText('more information');
    cardHouse.appendChild(title);
    cardHouse.appendChild(description);
    cardHouse.appendChild(button);
    container.appendChild(showImg);
    container.appendChild(cardHouse);
    shows.appendChild(container);
  };
}
