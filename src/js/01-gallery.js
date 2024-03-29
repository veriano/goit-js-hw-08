// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const creatGallery = (galleryItems) =>
    galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`).join('');
galleryContainer.insertAdjacentHTML('afterbegin', creatGallery(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250
});
