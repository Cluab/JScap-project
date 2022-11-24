import AddMovies from './add.js';
export default class Get {
  static getShows = async () => {
    // assignees the method to GET
    const options = { method: 'GET' };
    // listed the id's of different shows
    const premier = [169, 6, 541, 172, 1871, 3282];
    // fatches the data of each id and add's it to the list
    premier.forEach((id) => {
      const apperlist = async () => {
        await fetch(`https://api.tvmaze.com/shows/${id}`, options)
          .then((res) => res.json())
          .then((data) => AddMovies.addlist(data, id));
      };
      apperlist();
    });
  };
}
