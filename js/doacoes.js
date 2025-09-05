// Modal Pix
const btnPix = document.getElementById('btn-pix');
const modalPix = document.getElementById('pix-modal');
const closePix = document.getElementById('pix-close');
const btnCopiar = document.getElementById('copiar-chave');
const inputChave = document.getElementById('pix-chave');
const copiarMsg = document.getElementById('copiar-msg');

// Abrir modal
btnPix.addEventListener('click', () => {
  modalPix.style.display = 'flex';
});

// Fechar modal
closePix.addEventListener('click', () => {
  modalPix.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modalPix) modalPix.style.display = 'none';
});

// Copiar chave Pix
btnCopiar.addEventListener('click', () => {
  inputChave.select();
  inputChave.setSelectionRange(0, 99999); // para mobile
  navigator.clipboard.writeText(inputChave.value).then(() => {
    copiarMsg.textContent = "Chave copiada!";
    setTimeout(() => copiarMsg.textContent = "", 2000);
  });
});

// --- Formulário ---
const form = document.getElementById('form-doacao');
const msgStatus = document.getElementById('msg-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const valor = document.getElementById('valor').value.trim();

  if (!nome || !email || !valor) {
    msgStatus.textContent = "Preencha todos os campos!";
    msgStatus.style.color = "red";
    return;
  }

  msgStatus.textContent = `Obrigado ${nome}! Sua doação de R$ ${valor} foi registrada.`;
  msgStatus.style.color = "#003c78";

  form.reset();
});
