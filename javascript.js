const cardSorter = document.querySelector('.card-sorter');
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if(card.classList.contains('class', 'selected')){
      card.classList.remove('selected')
    }else{
    card.classList.add('selected');
  }
  });
});



