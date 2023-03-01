console.log("Let's get this party started!");

const searchButton = $('#search-giphy');

async function getAGif() {
  const searchTerm = ('#search-term').val || 'funny';
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);

  // addGifToGallery()

  let image = response.data.data[0].images.original.url;
  console.log('searchTerm', searchTerm, 'image:', image);

  addGifToGallery(image);
}

async function addGifToGallery(gif) {
  const gallery = $('#gif-gallery');
  const newGif = $('<img>', {
    src: gif
  })

  gallery.append(newGif);
}

searchButton.on('click', getAGif);

console.log(searchButton);