export default class PostLikes {
  static likecolor = (icon, count, num) => {
    count = count + 1;
    icon.style.color = 'red';
    num.innerText = count;
  };
  static likeupdate = () => {};
}
