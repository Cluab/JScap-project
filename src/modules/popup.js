export default class AddMovies {
    constructor(show, likes) {
      this.show = show;
      this.likes = likes;
    }


static popWrap = (image,title,description) => {
    // creating the popup element
    const popup = document.querySelector('popup-coments-wrapper');

    const closePopup = document.createElement('div');
    const popContainer = document.createElement('div');
    const popImage = document.createElement('img');
    const popName = document.createElement('h5');
    const popDescription = document.createElement('p');


closePopup.classList.add('popup-close');
popContainer.classList.add('card pop-up-contents');
popImage.classList.add('card-img-top');
popName.classList.add('card-title');
popDescription.classList.add('card-text')

popImage.src = `${image.image.medium}`;
popImage.alt = 'show image';
popName.innerText = title.name;
let sum = description.summary;
sum = sum.replace(/^"(.*)"$/, '$1');
popDescription.innerHtml = `${sum}`;

popContainer.appendChild(popImage);
popContainer.appendChild(popName);
popContainer.appendChild(popDescription);
popup.appendChild(closePopup);
popup.appendChild(popContainer);

}
};