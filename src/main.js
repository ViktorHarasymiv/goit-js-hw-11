import { listImages } from "./js/pixabay-api";
import { getImages } from "./js/pixabay-api";
import { loader } from "./js/pixabay-api";


/*   A P I  S E R V I E S   */ 

/*   ↓   */


/*   Variables   */ 

const form = document.querySelector(".form");

const apiKey = "48554296-d2b735e3ffae040ef4553c6bb";


/*  Styles  */

loader.style.display = 'none';


/*  Event Listener  */

form.addEventListener("submit" , (event) => {
     
    event.preventDefault();

    let inputValue = form.seurch.value.trim();
    let url = `https://pixabay.com/api/?key=${apiKey}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;

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

        return;
    }

    getImages(url );
    form.reset();
});