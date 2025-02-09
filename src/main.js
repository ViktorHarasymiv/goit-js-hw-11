/* Import */

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";

/*   Variables   */ 

const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const form = document.querySelector(".form");

/*  Setup for gallery render */

const refreshPage = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

/*   A P I  S E R V I E S   */ 


/*  Event Listener  */

form.addEventListener("submit" , async (event) => {
    event.preventDefault();
    const inputValue = form.search.value.trim();

    loader.classList.remove('hidden');

    listImages.innerHTML = "";

    if(inputValue.length === 0 || inputValue.value === "") {

         iziToast.warning({
             title: 'Warning',
             message: 'Please, enter a value!',

             titleColor: 'white',
            messageColor: 'white',
             titleSize: '12px',
             backgroundColor: '#ef4040',

             iconColor: 'white',
             position: 'topRight'
         });

         loader.classList.add('hidden');

         return;
    }

    try {
        const data = await getImages(inputValue);

        if (!data.hits.length) {
            loader.classList.add('hidden');
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
        } else {
    
        listImages.insertAdjacentHTML("beforeend", createMarkup(data.hits));

        loader.classList.add('hidden');
    
        refreshPage.refresh();

        form.reset();
    }
        

    } catch(error) {
        loader.classList.add('hidden');

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
        }
});