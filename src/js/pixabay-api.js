import { createMarkup } from "./render-functions";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const seurch_button = document.querySelector('.get--seurch_button');
let formValue = document.querySelector('#form--input');

const apiKey = "48554296-d2b735e3ffae040ef4553c6bb";
let inputValue = "";

formValue.addEventListener('input' , function(event) {
    event.preventDefault();

    inputValue = event.target.value.trim();
});

loader.style.display = 'none';

seurch_button.addEventListener("click" , (event) => { 
    event.preventDefault();

    listImages.innerHTML = "";

    let url = `https://pixabay.com/api/?key=${apiKey}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;

    if(inputValue.length === 0 || formValue.value === "") {

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

        return false;
    }

    fetch(url)
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

            setTimeout(() => {
              listImages.innerHTML = ("beforeend", createMarkup(data.hits));

              loader.style.display = 'none';

              const refreshPage = new SimpleLightbox('.gallery a', {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
              });
              refreshPage.refresh();   
            }, 1500);

            formValue.value = "";
 })
    .catch((error) => {
        console.log(error.message);
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
});
