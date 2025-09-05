// Dados de exemplo (em produção podem vir de uma API)
const projetos = [
  {
    id: 1,
    titulo: "Oficina de Artes",
    data: "15/10/2025",
    vagas: 12,
    descricao: "Atividade cultural para jovens da comunidade."
  },
  {
    id: 2,
    titulo: "Campeonato de Futebol",
    data: "22/11/2025",
    vagas: 8,
    descricao: "Esporte e lazer com times locais."
  },
  {
    id: 3,
    titulo: "Curso de Inclusão Digital",
    data: "05/12/2025",
    vagas: 5,
    descricao: "Capacitação em informática para adultos."
  }
];

const lista = document.getElementById("projetos-lista");
const modal = document.getElementById("inscricao-modal");
const closeModal = document.getElementById("modal-close");
const form = document.getElementById("form-inscricao");
const msgStatus = document.getElementById("msg-status");
const inputProjetoId = document.getElementById("projeto-id");

// Renderiza projetos
function renderProjetos() {
  lista.innerHTML = projetos.map(p => `
    <div class="projeto-card">
      <h3>${p.titulo}</h3>
      <p class="projeto-info"><strong>Data:</strong> ${p.data}</p>
      <p class="projeto-info"><strong>Vagas disponíveis:</strong> ${p.vagas}</p>
      <p class="projeto-info">${p.descricao}</p>
      <button class="btn-inscrever" onclick="abrirModal(${p.id})">Inscreva-se</button>
    </div>
  `).join("");
}
renderProjetos();

// Abre modal
function abrirModal(id) {
  modal.style.display = "flex";
  inputProjetoId.value = id;
}
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Submissão do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const projetoId = inputProjetoId.value;

  if (!nome || !email || !telefone) {
    msgStatus.textContent = "Preencha todos os campos!";
    msgStatus.style.color = "red";
    return;
  }

  const projeto = projetos.find(p => p.id == projetoId);
  msgStatus.style.color = "#003c78";
  msgStatus.textContent = `Obrigado ${nome}! Sua inscrição no projeto "${projeto.titulo}" foi registrada.`;

  form.reset();
  setTimeout(() => {
    modal.style.display = "none";
    msgStatus.textContent = "";
  }, 2500);
});
