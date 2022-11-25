/**
 * @jest-environment jsdom
 */
import fetch from 'cross-fetch';
import AddMovies from '../modules/add.js';
import Get from '../modules/get.js';
import Counters from '../modules/counters.js';

describe('test-1', () => {
  // added some Dom minaplaytion for our tests
  document.body.innerHTML =
    '<section> <span id="itemcount"></span></section><section id="show-cards"> </section>';
  // added an object array to mimic local storage, 6, 541, 172, 1871, 3282
  const mockResponse = [
    {
      name: 'Breaking Bad',
      summary:
        '<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher',
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
      },
    },
  ];
  const premiers = [6, 541, 172];
  //  document.querySelector('#itemcount').textContent;
  AddMovies.addlist(mockResponse[0], premiers[0]);
  test('Delete all items from the list', async () => {
    const count = Counters.itemsCounter();
    expect(count).toBe(0);
  });
});
