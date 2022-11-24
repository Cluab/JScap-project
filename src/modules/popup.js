export default class popMovies {
  constructor(show, likes) {
    this.show = show;
    this.likes = likes;
  }

  static popWrap = async (image, title, description) => {
    // // creating the popup element


    const showsPopup = document.querySelector('.popupMainCard');
    showsPopup.style.display = 'content';
    const wrapper = document.createElement('div')
    const popupContainer = document.createElement('div');
    const close = document.createElement('span');
    const commentTitle= document.createElement('h5');
    const commentText = document.createElement('p');
    const form = document.createElement('div');
    const addCommentTitle = document.createElement('h4');
    const formInfo = document.createElement('div');
    const inputComment = document.createElement('input');
    const commentInput = document.createElement('textarea');
    const commentButton = document.createElement('input');



    const popImg = document.createElement('img');
    const popHouse = document.createElement('div');
    const poptitle = document.createElement('h5');
    const popdescription = document.createElement('div');
    

    // adding classes to different elements
    wrapper.classList.add('popup-coments-wrapper')
    popupContainer.classList.add('card','pop-up-contents');
    close.classList.add('pointer-event');
    popImg.classList.add('card-img-top');
    popHouse.classList.add('card-body','popupCard');
    poptitle.classList.add('card-title');
    popdescription.classList.add('card-text');
    popupContainer.setAttribute('style', 'width: 40rem;');
    commentTitle.classList.add('card-title');
    commentText.classList.add('date');
    form.classList.add('form-comment')
    addCommentTitle.classList.add('add-comment-title');
    formInfo.classList.add('mb-3');
    inputComment.classList.add('form-control');
    commentInput.classList.add('form-control');
    commentButton.classList.add('btn','btn-primary');

    // assigning api variables to deferent elements
    close.innerHTML = `<span>X</span>`
    popImg.src = image;
    popImg.alt = 'image';
    poptitle.innerText = title;
    popdescription.innerHTML = description;
    commentTitle.innerText += `comments:0`;
    commentText.innerText = `12/23/2022<span>Moise</span> <span>I love it</span>`;
    addCommentTitle.innerText =`<h4>add comments</h4>`;
    inputComment.innerText = `<input type = "text" placeholder="name@example.com">`
    commentInput.innerText = `<textarea rows="3"></textarea>`;
    commentButton.innerText= `<input type="submit">Comment</input>`
    // appending elements with each other

    
    popHouse.appendChild(poptitle);
    popHouse.appendChild(popdescription);
    popupContainer.appendChild(close);
    popupContainer.appendChild(popImg);
    popupContainer.appendChild(popHouse);
    formInfo.appendChild(inputComment);
    formInfo.appendChild(commentInput);
    form.appendChild(addCommentTitle);
    form.appendChild(formInfo);
    popupContainer.appendChild(commentTitle);
    popupContainer.appendChild(commentText);
    popupContainer.appendChild(commentButton);
    popupContainer.appendChild(form);
    showsPopup.appendChild(popupContainer);
    showsPopup.appendChild(wrapper);

    close.addEventListener('click',() =>{
        console.log('hello man')
        showsPopup.removeChild(popupContainer);
        showsPopup.removeChild(wrapper);
    })
  };

}
