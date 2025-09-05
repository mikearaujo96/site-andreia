document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("loader-counter");
  const loader = document.getElementById("loader");
  const loaderTop = document.querySelector(".loader-top");
  const loaderBottom = document.querySelector(".loader-bottom");

  let value = 0;
  const interval = setInterval(() => {
    value++;
    counter.textContent = value + "%";

    if (value >= 100) {
      clearInterval(interval);

      // animação cortina → azul sobe, amarelo desce
      loaderTop.style.transform = "translateY(-100%)";
      loaderBottom.style.transform = "translateY(100%)";

      // remover loader depois da transição
      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);
    }
  }, 20); // 0% → 100% em ~2s
});



// animationHome.js
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(
    // Sessão Fazemos
    ".titulo-fazemos h2, .titulo-fazemos div p, .titulo-fazemos .btn, .cards-fazemos .card," +
    // Sessão Impacto
    ".impacto-img img, .impacto-conteudo h2, .impacto-conteudo p, .btn-impacto," +
    // Sessão Apoio
    ".apoio-img img, .apoio-conteudo h2, .apoio-conteudo p, .btn-apoio"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); // 👈 para não remover nem reexecutar
      }
    });
  }, { threshold: 0.2 });

  elementos.forEach(el => observer.observe(el));
});
