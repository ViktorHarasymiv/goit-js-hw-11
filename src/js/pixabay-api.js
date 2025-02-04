// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { createMarkup } from "./render-functions";


/*   Variables   */ 

export const listImages = document.querySelector('.gallery');
export const loader = document.querySelector('.loader');

const refreshPage = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

/*  Function  */

export function getImages(api) {
    fetch(api)
    .then((response) => response.json())
    .then((data) => {

        if (!data.hits.length) {
            iziToast.warning({
               title: 'Warning',
               message: 'Sorry, there are no images matching your search query. Please try again!',

               titleColor: 'white',
               messageColor: 'white',
               titleSize: '12px',
               backgroundColor: '#ef4040',

               iconColor: 'white',
               position: 'topRight'
            });
        }

        loader.style.display = 'block';

        listImages.innerHTML = ("beforeend", createMarkup(data.hits));

        loader.style.display = 'none';

        refreshPage.refresh();   
        
 })
    .catch((error) => {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',

            titleColor: 'white',
            messageColor: 'white',
            titleSize: '12px',
            backgroundColor: '#ef4040',

            iconColor: 'white',
            position: 'topRight'
        });
    });
}
