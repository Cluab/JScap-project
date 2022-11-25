export default class Showsection {
  // shows only list section
  static showList = () => {
    document.getElementById('show-cards').classList.remove('non-show');
    document.getElementById('about-section').classList.add('non-show');
    document.getElementById('contact-section').classList.add('non-show');
  };

  // shows only about section
  static showabout = () => {
    document.getElementById('about-section').classList.remove('non-show');
    document.getElementById('show-cards').classList.add('non-show');
    document.getElementById('contact-section').classList.add('non-show');
  };

  // shows only contact section
  static showcontact = () => {
    document.getElementById('contact-section').classList.remove('non-show');
    document.getElementById('show-cards').classList.add('non-show');
    document.getElementById('about-section').classList.add('non-show');
  };
}
