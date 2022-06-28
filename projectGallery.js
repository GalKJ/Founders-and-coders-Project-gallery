const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    let paragraph = card.querySelector('p');
    let button = card.querySelector('button');

    button.addEventListener('click', () => {
      if (paragraph.style.visibility === "hidden") {
    paragraph.style.visibility = "visible";
  } else {
    paragraph.style.visibility = "hidden";
  }
    })
  });

  