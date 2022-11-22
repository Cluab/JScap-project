import AddMovies from './add';
class Get {
  static getShows = async () => {
    const shows = [];
    const options = { method: 'GET' };

    await fetch('https://api.tvmaze.com/search/shows?q=suites', options)
      .then((res) => res.json())
      .then((data) =>
        data.forEach((el) => {
          if (el.show.id === 172) {
            shows.push(el);
          }
        })
      );
    AddMovies.addlist(shows);
  };
}

Get.getShows();
