export default class PostLikes {
  static likePost = async (id, num) => {
    const GET = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BQIepMoeO6ImEkauJ2th/likes',
      GET
    )
      .then((response) => response.json())
      .then((data) =>
        data.forEach((showsLikes) => {
          if (showsLikes.item_id - 1000 === id - 1000) {
            num.innerText = showsLikes.likes;
          }
        })
      )
      .catch(new Error('refresh page'));
  };

  static likecolor = (icon) => {
    icon.style.color = 'red';
  };

  static likeupdate = async (id, num) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic Og==',
      },
      body: `{"item_id":"${id}"}`,
    };

    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BQIepMoeO6ImEkauJ2th/likes',
      options
    ).catch(new Error('refresh page'));

    const GET = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BQIepMoeO6ImEkauJ2th/likes',
      GET
    )
      .then((response) => response.json())
      .then((data) =>
        data.forEach((showsLikes) => {
          if (showsLikes.item_id - 1000 === id - 1000) {
            num.innerText = showsLikes.likes;
          }
        })
      )
      .catch(new Error('refresh page'));
  };
}
