document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Aqui você pode integrar com FormSubmit, EmailJS ou backend
  alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
  this.reset();
});
