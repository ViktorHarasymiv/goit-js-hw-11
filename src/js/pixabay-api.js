// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { createMarkup } from "./render-functions";

import axios from 'axios';

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
    axios
    .get(api)
    .then((response) => { console.log(response)
        if (!response.data.hits.length) {
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

        listImages.innerHTML = ("beforeend", createMarkup(response.data.hits));

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

/* COMMENT HM */

alert("Коментар : Я не можу зрозуміти яку саме частину винести в файл api ,а яку в мейн , тикніть пальцем в потрібну частину коду , яку винести Переробив на axios і працює завантажувач , дальше ступор");