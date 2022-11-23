export default class Counters {
  static itemsCounter = () => {
    const items = document.getElementById('show-cards');
    const directChildren = items.children.length;
    document.getElementById('itemcount').innerText = directChildren;
  };
}
