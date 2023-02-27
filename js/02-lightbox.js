//   1. import the galleryItems array
//   2. create murkup template for each galleriItem.
//   3. append the galleru markup to the DOM (ul.gallery).
//   4.set up SimpleLightbox 

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkupEls = galleryItems
  .map(({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)
  .join("");
 const galleryList = document.querySelector('.gallery');
 galleryList.innerHTML = galleryMarkupEls;

  let gallery = new SimpleLightbox(".gallery a", {
   captionDelay: 250,
   captionsData:	'alt',
   captionPosition:	'bottom',
 });
