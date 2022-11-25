import postComments from './postcomments.js';

export default class popMovies {
  constructor(show, likes) {
    this.show = show;
    this.likes = likes;
  }

  static popWrap = async (image, title, description, id) => {
    // // creating the popup element

    const showsPopup = document.querySelector('.popupMainCard');
    showsPopup.style.display = 'content';
    const wrapper = document.createElement('div');
    const popupContainer = document.createElement('div');
    const close = document.createElement('span');
    const commentTitle = document.createElement('h5');
    const commentText = document.createElement('p');
    const form = document.createElement('div');

    const popImg = document.createElement('img');
    const popHouse = document.createElement('div');
    const poptitle = document.createElement('h5');
    const popdescription = document.createElement('div');

    // adding classes to different elements
    wrapper.classList.add('popup-coments-wrapper');
    popupContainer.classList.add('card', 'pop-up-contents');
    close.classList.add('pointer-event');
    popImg.classList.add('card-img-top');
    popHouse.classList.add('card-body', 'popupCard');
    poptitle.classList.add('card-title');
    popdescription.classList.add('card-text');
    popupContainer.setAttribute('style', 'width: 40rem;');
    commentTitle.classList.add('card-title');
    commentText.classList.add('date');
    form.classList.add('form-comment');

    // assigning api variables to deferent elements
    close.innerHTML = '<span>X</span>';
    popImg.src = image;
    popImg.alt = 'image';
    poptitle.innerText = title;
    popdescription.innerHTML = description;
    commentTitle.innerHTML = 'comments';
    commentText.innerHTML = '12/23/2022 <span>moise</span> <span>The movie is amazing.</span>';
    form.innerHTML = `
    <form action="" method="get" id="form1">
    <h4 class="add-comment-title">add comments</h4>
    <div class="mb-3">
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" form= "form1" value="Submit">Submit</button>
      </form>`;

    // appending elements with each other

    popHouse.appendChild(poptitle);
    popHouse.appendChild(popdescription);
    popupContainer.appendChild(close);
    popupContainer.appendChild(popImg);
    popupContainer.appendChild(popHouse);
    popupContainer.appendChild(commentTitle);
    popupContainer.appendChild(commentText);
    popupContainer.appendChild(form);
    showsPopup.appendChild(popupContainer);
    showsPopup.appendChild(wrapper);

    close.addEventListener('click', () => {
      showsPopup.removeChild(popupContainer);
      showsPopup.removeChild(wrapper);
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('#exampleFormControlInput1').value;
      const comment = document.querySelector('#exampleFormControlTextarea1').value;
      postComments.postComment(1, username, comment);
    });
  };
}
