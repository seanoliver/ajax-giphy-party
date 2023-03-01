console.log("Let's get this party started!");

const searchButton = $('#search-giphy');
const clearButton = $('#clear-all');

async function getAGif() {
  console.log($('#search-term').val());
  const searchTerm = $('#search-term').val() || 'funny';
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);

  const rIdx = randomIndex();
  console.log('rIdx', rIdx);
  let image = response.data.data[rIdx].images.original.url;
  console.log('searchTerm', searchTerm, 'image:', image);

  addGifToGallery(image, searchTerm);
}

async function addGifToGallery(gif, searchTerm) {
  const gallery = $('#gif-gallery');
  // const newGif = $('<img>', {
  //   src: gif,
  //   class: 'gif'
  // });
  const subtitle = $(`<p>${searchTerm}</p>`);

  const gifItemDiv = $('<div>', {
    class: 'gif-item',
    style: `background: url(${gif});
            background-size: cover;
            background-position: center;`

  })

  // newGif.appendTo(gifItemDiv);
  subtitle.appendTo(gifItemDiv);
  gifItemDiv.appendTo(gallery);

}

function clearAll(evt) {
  $('#gif-gallery').empty();
}

function randomIndex() {
  return Math.floor(Math.random() * 50);
}

searchButton.on('click', getAGif);
clearButton.on('click', clearAll);

console.log(searchButton);