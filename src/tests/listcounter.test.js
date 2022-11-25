/**
 * @jest-environment jsdom
 */
import AddMovies from '../modules/add.js';
import Counters from '../modules/counters.js';

describe('test-1', () => {
  // added some Dom minaplaytion for our tests
  document.body.innerHTML =
    '<section> <span id="itemcount"></span></section><section id="show-cards"> </section>';
  // added an object array to mimic api fetch respond.
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
    {
      name: 'The 100',
      summary:
        '<p><b>The 100</b> follows protagonist Walter White, a chemistry teacher',
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
      },
    },
    {
      name: 'Suits',
      summary:
        '<p><b>Suits</b> follows protagonist Walter White, a chemistry teacher',
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
      },
    },
    {
      name: 'Prison Break',
      summary:
        '<p><b>Prison Break</b> follows protagonist Walter White, a chemistry teacher',
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
      },
    },
  ];
  // added an array to mimic api id.
  const premiers = [6, 541, 172, 1871, 3282];

  test('no items in list', async () => {
    const count = Counters.itemsCounter();
    expect(count).toBe(0);
  });

  test('one item in list', async () => {
    AddMovies.addlist(mockResponse[0], premiers[0]);
    const count = Counters.itemsCounter();
    expect(count).toBe(1);
  });

  test('two items in list', async () => {
    AddMovies.addlist(mockResponse[1], premiers[1]);
    const count = Counters.itemsCounter();
    expect(count).toBe(2);
  });
  test('three items in list', async () => {
    AddMovies.addlist(mockResponse[2], premiers[2]);
    const count = Counters.itemsCounter();
    expect(count).toBe(3);
  });

  test('four items in list', async () => {
    AddMovies.addlist(mockResponse[3], premiers[3]);
    const count = Counters.itemsCounter();
    expect(count).toBe(4);
  });

  test('remove all items from list', async () => {
    document.getElementById('show-cards').innerHTML = '';
    const count = Counters.itemsCounter();
    expect(count).toBe(0);
  });
});
