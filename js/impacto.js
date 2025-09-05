// Animação simples de contadores
document.addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".contador");

  const animarContadores = () => {
    contadores.forEach(contador => {
      const alvo = +contador.getAttribute("data-alvo");
      let valor = 0;
      const incremento = Math.ceil(alvo / 200); // velocidade
      const atualizar = () => {
        valor += incremento;
        if (valor > alvo) valor = alvo;
        contador.textContent = valor.toLocaleString("pt-BR");
        if (valor < alvo) requestAnimationFrame(atualizar);
      };
      atualizar();
    });
  };

  // Executa quando a seção aparece na tela
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animarContadores();
        observer.disconnect(); // roda uma vez só
      }
    });
  }, { threshold: 0.4 });

  observer.observe(document.querySelector(".impacto-numeros"));
});
