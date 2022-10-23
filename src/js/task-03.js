const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const startPointOfGallery = document.querySelector(".gallery");

const setOfGalleryElements = images.map
( image => `<li class="gallery-list">
<img src=${image.url} alt=${image.alt}>
</li>`).join("");
startPointOfGallery.insertAdjacentHTML('afterBegin', setOfGalleryElements);

// for (let i = 0; i < images.length; i++) {
//   const itemLi = document.createElement("li");
//   itemLi.classList.add("gallery-list")
//   let string = `<img src=${images[i].url}
//  alt=${images[i].alt}>`;
//  itemLi.insertAdjacentHTML('afterBegin', string);
//  galleryArray[i] = itemLi;
//  console.log(galleryArray[i]);
// }
// list.append(...galleryArray);
