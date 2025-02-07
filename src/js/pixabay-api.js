/*  Function  API  */

export async function getImages(inputValue) {
    
    const apiKey = "48554296-d2b735e3ffae040ef4553c6bb";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;

    const res = await fetch(url);
        if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
    }