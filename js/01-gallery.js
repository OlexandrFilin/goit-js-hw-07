import { galleryItems } from "./gallery-items.js";
// Change code below this line
const containerEl = document.querySelector(".gallery");
function markupGalery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => ` <li class="gallery__item" >
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join("");
}

containerEl.insertAdjacentHTML("afterbegin", markupGalery(galleryItems));
containerEl.addEventListener("click", onClickImg);
function onClickImg(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const result = galleryItems.find(({ preview }) => preview === e.target.src);
  const instance = basicLightbox.create(
    `
   <img
      src="${result.original}"
      alt="${result.description}"
    />
    `,
    {
      onClose: (instance) => {
        instance.close(); //Закриваємо лайтбокс
      },
      onShow: (instance) => {
        // тут також будце при відображенні лайтбоксу
      },
    }
  );
  instance.show();
  console.log(instance);
}
