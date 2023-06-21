// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()

const posterImage = document.getElementById('poster-image');
const posterTitle = document.getElementById('poster-title');
const posterQuote = document.getElementById('poster-quote');
const randomizeButton = document.getElementById('randomize');
const submitButton = document.getElementById('submit');
const posterForm = document.getElementById('poster-form');
const posterFormQuote = document.getElementById('poster-form-quote');
const posterFormAuthor = document.getElementById('poster-form-author');
const posterFormImage = document.getElementById('poster-form-image');

// Array of predefined poster objects
const posters = [
  {
    image: 'https://hips.hearstapps.com/hmg-prod/images/marcus-aurelius-gettyimages-122316830.jpg',
    title: 'It is not death that a man should fear, but never beginning to live',
    quote: 'Marcus Aurelius',
  },
  {
    image: 'https://pbs.twimg.com/media/E5kmhinWUAID96G.jpg:large',
    title: 'Man cannot remake himself without suffering for he is both the marble and the sculptor',
    quote: 'Alexis Carrel',
  },
  {
    image: 'https://study.com/cimages/multimages/16/456px-julius_caesar_met_dp-12755-0014084441122015046377.jpg',
    title: 'I came, I saw, I conquered',
    quote: 'Julius Caesar',
  },
  {
    image: 'https://i.imgflip.com/1bw4g9.jpg?a468096',
    title: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    quote: 'Mike Wozawski',
  },
  {
    image: 'https://media.tenor.com/jswWMb0l_9kAAAAi/shrek-mike.gif',
    title: 'Get out of my Swamp',
    quote: 'Shrek',
  },
  {
    image: 'https://thelovablecat.com/wp-content/uploads/2023/01/is-beluga-cat-a-type-of-cat-breed-blog-image.jpg',
    title: 'Meow',
    quote: 'Beluga',
  }
  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked

randomizeButton.addEventListener('click', generateRandomPoster);


// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked

submitButton.addEventListener('click', generateCustomPoster);


// Function to generate a random poster
function generateRandomPoster() {
  // TODO: Generate a random index within the range of the posters array length
  const randomIndex = Math.floor(Math.random() * posters.length);

  // TODO: Retrieve the random poster object from the posters array
  const randomPoster = posters[randomIndex];

  // TODO: Call the function to update the DOM with the values from the random poster object
  updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();

  // TODO: Retrieve the entered quote and author from the input fields
  const quote = posterFormQuote.value;
  const author = posterFormAuthor.value;
  const imageUrl = posterFormImage.value;

  // TODO: Create a custom poster object with the entered values
  const customPoster = {
    image: imageUrl,
    title: 'Custom Poster',
    quote: `${quote} - ${author}`,
  };

  // TODO: Call the function to update the DOM with the values from the custom poster object
  updatePoster(customPoster.image, customPoster.title, customPoster.quote);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
  // TODO: Update the DOM with the values provided for the poster image, title, and quote
  if (imageUrl) {
    posterImage.src = imageUrl; // Use the custom image URL if provided
  } else {
    // Use a default image if the custom URL is not provided
    posterImage.src = 'default-image.jpg'; // Replace 'default-image.jpg' with your desired default image URL
  }
  posterTitle.textContent = title;
  posterQuote.textContent = quote;
}


