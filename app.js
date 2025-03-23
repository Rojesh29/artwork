document.addEventListener("DOMContentLoaded", function() {
  const artworks = document.querySelectorAll('.artwork');
  artworks.forEach((artwork, index) => {
      setTimeout(() => {
          artwork.style.opacity = 1; // Make artwork visible
      }, index * 200); // Delay each artwork's appearance
  });
});

function buyArtwork(title, price) {
  alert(`You have selected "${title}" for $${price}. Thank you for your purchase!`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message!');
  this.reset(); // Reset the form after submission
});