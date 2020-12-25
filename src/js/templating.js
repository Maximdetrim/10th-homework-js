import itemsTemplate from '../templates/gallery-items.hbs';
import menuList from '../menu.json';

const markup = itemsTemplate(menuList),
      galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup) 