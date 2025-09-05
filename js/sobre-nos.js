// Usando IntersectionObserver para animar entrada e saída
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".mvv-card, .equipe-card, .atuacao");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      } else {
        entry.target.classList.remove("reveal");
      }
    });
  }, { threshold: 0.3 });

  elementos.forEach(el => observer.observe(el));
});
