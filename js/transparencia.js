// Dados fictícios para teste (pode puxar de API futuramente)

// Relatórios anuais
const relatorios = [
  { ano: 2023, link: "docs/relatorio-2023.pdf" },
  { ano: 2022, link: "docs/relatorio-2022.pdf" },
  { ano: 2021, link: "docs/relatorio-2021.pdf" }
];

// Termos de fomento
const termos = [
  { numero: "6019.2024/0000791-5", secretaria: "Esportes e Lazer", link: "docs/termo-esportes.pdf" },
  { numero: "6074.2024/0003772-5", secretaria: "Direitos Humanos", link: "docs/termo-direitos.pdf" }
];

// Prestação de contas
const contas = [
  { ano: 2023, receitas: 504000, despesas: 450000, saldo: 54000 },
  { ano: 2022, receitas: 420000, despesas: 390000, saldo: 30000 },
  { ano: 2021, receitas: 380000, despesas: 350000, saldo: 30000 }
];

// Preencher relatórios
const listaRelatorios = document.getElementById("lista-relatorios");
listaRelatorios.innerHTML = relatorios.map(r => `
  <li>
    <span>Relatório ${r.ano}</span>
    <a href="${r.link}" target="_blank">Baixar PDF</a>
  </li>
`).join("");

// Preencher termos
const listaTermos = document.getElementById("lista-termos");
listaTermos.innerHTML = termos.map(t => `
  <li>
    <span>Termo ${t.numero} — ${t.secretaria}</span>
    <a href="${t.link}" target="_blank">Visualizar</a>
  </li>
`).join("");

// Preencher tabela de contas
const tabela = document.querySelector("#tabela-contas tbody");
tabela.innerHTML = contas.map(c => `
  <tr>
    <td>${c.ano}</td>
    <td>R$ ${c.receitas.toLocaleString("pt-BR")}</td>
    <td>R$ ${c.despesas.toLocaleString("pt-BR")}</td>
    <td>R$ ${c.saldo.toLocaleString("pt-BR")}</td>
  </tr>
`).join("");
