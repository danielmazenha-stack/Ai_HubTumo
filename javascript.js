
document.addEventListener('DOMContentLoaded', function() {
  const quizSection = document.getElementById('quizSection');
  const resultPage = document.getElementById('resultPage');
  const resultMessage = document.getElementById('resultMessage');
  const gamesSection = document.getElementById('gamesSection');
  const siteHeader = document.querySelector('.site-header');
  const siteFooter = document.querySelector('.site-footer');


  
  
  if (gamesSection) gamesSection.style.display = 'none';
  if (quizSection) quizSection.style.display = 'block';


  const quizForm = document.getElementById('quizForm');
  if (quizForm) {
    quizForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const form = event.target;
      const score = ['q1', 'q2', 'q3'].reduce((sum, name) => sum + Number(form[name].value), 0);

      let cardIndex;
      if (score <= 5) {
        cardIndex = 0;
      } else if (score <= 7) {
        cardIndex = 1;
      } else {
        cardIndex = 2;
      }

      const allCards = document.querySelectorAll('#gamesSection .card');
      allCards.forEach(card => card.classList.remove('highlight'));
      if (allCards[cardIndex]) {
        allCards[cardIndex].classList.add('highlight');
      }

      
      if (quizSection) quizSection.style.display = 'none';
      if (resultPage) resultPage.style.display = 'none';
      if (siteHeader) siteHeader.style.display = 'block';
      if (siteFooter) siteFooter.style.display = 'block';
      if (gamesSection) {
        gamesSection.style.display = 'grid';
        gamesSection.classList.add('show-cards');
        gamesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  
  const showGamesBtn = document.getElementById('showGames');
  if (showGamesBtn) {
    showGamesBtn.addEventListener('click', function() {
      if (resultPage) resultPage.style.display = 'none';
      if (siteHeader) siteHeader.style.display = 'block';
      if (siteFooter) siteFooter.style.display = 'block';
      if (gamesSection) {
        gamesSection.style.display = 'grid';
        gamesSection.classList.add('show-cards');
        gamesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
if(quizForm) {
  const skipBtn = document.getElementById('skipQuiz');
  if (skipBtn) {
    skipBtn.addEventListener('click', function() {
      if (quizSection) quizSection.style.display = 'none';
      if (gamesSection) {
        gamesSection.style.display = 'grid';
        gamesSection.classList.add('show-cards');
        gamesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
