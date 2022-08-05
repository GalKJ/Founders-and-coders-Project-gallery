// Select elements 
const cards = document.querySelectorAll('.card');

// Add event listeners to show/hide description text
  cards.forEach(card => {
    let paragraph = card.querySelector('p');
    let button = card.querySelector('button');

    button.addEventListener('click', () => {
      if (paragraph.style.visibility === "visible") {
    paragraph.style.visibility = "hidden";
  } else {
    paragraph.style.visibility = "visible";
  }
    })
  });

  