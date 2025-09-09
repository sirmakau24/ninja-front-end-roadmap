// Basic setup for future interactivity
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      alert(`You clicked: ${card.textContent.trim()}`);
      // In future: Redirect to a page, open a modal, or load data
    });
  });
});
