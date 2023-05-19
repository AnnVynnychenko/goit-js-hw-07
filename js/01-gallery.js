import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

function galleryCreateEl(items) {
    const galleryElements = items.map(item =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
        </a>
    </li>`).join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryElements);
    return galleryEl;

}

function onGalleryItemClick(event) {
    event.preventDefault();
    let clickedItemEl = event.target.closest('.gallery__item');
    if (!clickedItemEl) {
        return;
    }
    const originalPicture = clickedItemEl.querySelector('.gallery__image').dataset.source;
    const instance = basicLightbox.create(
        `<img src="${originalPicture}">`
    );
    instance.show()
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            instance.close()
        }
    
    });
}

function initGallery(items) {
    const galleryMarkup = galleryCreateEl(items);
    galleryMarkup.addEventListener('click', onGalleryItemClick)
}

initGallery(galleryItems);






