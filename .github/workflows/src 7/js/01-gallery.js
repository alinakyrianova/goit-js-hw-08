import { galleryItems } from './gallery-items';
import'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Add imports above this line
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryAdd = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${preview}">
      <img class="gallery__image" src="${original}" alt="${description}" />
   </a></li>`
  )
  .join("");
galleryEl.innerHTML = galleryAdd;

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
console.log(galleryItems);


