import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerEl = document.querySelector(".gallery");
function markupGalery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
    )
    .join("");
}
containerEl.insertAdjacentHTML("beforeend", markupGalery(galleryItems));

const galery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// containerEl.addEventListener("click", onClickImg);
// function onClickImg(e) {
//   e.preventDefault();
//   if (e.target === e.currentTarget) {
//     return;
//   }
//  }
