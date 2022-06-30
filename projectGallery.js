const cards = document.querySelectorAll('.card');

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

  