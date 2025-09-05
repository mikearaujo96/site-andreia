// Aqui você pode colocar animações ou carregamento dinâmico se quiser
// Exemplo simples: animação ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".mvv-card, .equipe-card");
  const reveal = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add("reveal");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});
