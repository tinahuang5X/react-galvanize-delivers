export default function getMenuItems() {
  return fetch('./data/menu-items.json').then(response => response.json());
}
