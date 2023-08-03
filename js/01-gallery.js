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
let instAb = 0;
containerEl.insertAdjacentHTML("afterbegin", markupGalery(galleryItems));
containerEl.addEventListener("click", onClickImg);
function onClickImg(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const result = galleryItems.find(({ preview }) => preview === e.target.src);
  const instance = basicLightbox.create(
    `   <img
      src="${result.original}"
      alt="${result.description}"
    /> `,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", onClickEscape, instance);
        console.log("remove even listener keyboard");
        return true;
      },
      onShow: (instance) => {
        instAb = instance;
        document.addEventListener("keydown", onClickEscape, instance);
        console.log("add even listener keyboard");
      },
    }
  );
  instance.show();
}
function onClickEscape(e) {
  if (e.code === "Escape") {
    instAb.close();
  }
}
