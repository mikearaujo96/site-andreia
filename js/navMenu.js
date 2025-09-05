const menuSite = `
        <div class="contatos-rapidos">
            <div>
                <a href="https://www.google.com/maps?q=Rua+Jose+Ferreira+Crespo,+674+-+Jardim+Sao+Vicente+-+São+Paulo" target="_blank">
                    <img src="assets/icones/icon-localizacao.svg" alt="icone-localização">
                    <p>Rua Jose Ferreira Crespo, 674 - Jardim Sao Vicente - São Paulo</p>
                </a>
                <a href="mailto:contato@institutohandmaria.org" target="_blank">
                    <img src="assets/icones/icon-email.svg" alt="icone-email">
                    <p>contato@institutohandmaria.org</p>
                </a>
            </div>
            <div class="links-contatos-rapidos-redesociais">
                <a href="https://web.facebook.com/icehandmaria" target="_blank"><img src="assets/icones/icon-facebook.svg" alt="icone-facebook"></a>
                <a href="https://www.instagram.com/instituto.handmaria/" target="_blank"><img src="assets/icones/icon-instagram.svg" alt="icone-instagram"></a>
                <a href="https://wa.me/5511988404276" target="_blank"><img src="assets/icones/icon-whatsapp.svg" alt="icone-whatsapp"></a>
            </div>
        </div>

        <nav class="navigation">

            <div class="nav-logo">
                <a href="index.html">
                    <img src="assets/logos/logo-com-fundo.svg" alt="logo site instituto hand maria">
                </a>
            </div>

            <div class="menu-hamburg">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="nav-links">

                <button class="fechar-menu">
                    <img src="assets/icones/icon-close.svg" alt="fechar menu">
                </button>

                <a href="index.html">Home</a>
                <a href="inscricoes.html">Inscrições</a>
                <a href="noticias.html">Noticias</a>
                <a href="sobre-nos.html">Sobre nós</a>
                <a href="transparencia.html">Transparência</a>
                <a href="doe.html" class="link-doacoes-menu">DOE AGORA</a>
            </div>

            <div class="bt-doacao">
                <a href="doe.html">DOE AGORA</a>
            </div>

        </nav>
`
document.querySelector('#insert-menu').innerHTML = menuSite


// ===== LINHA DESLIZANTE =====
const navLinksContainer = document.querySelector(".nav-links");
const navLinksItems = navLinksContainer.querySelectorAll("a");


function updateHoverLine(linkElement) {
    const linkRect = linkElement.getBoundingClientRect();
    const navRect = navLinksContainer.getBoundingClientRect();

}

// ===== DEFINIR O LINK ATIVO BASEADO NA URL =====
let linkAtivo = null;
const currentUrl = window.location.pathname.split("/").pop(); // pega só o arquivo


navLinksItems.forEach(link => {
    const linkUrl = new URL(link.href, window.location.origin).pathname.split("/").pop();

    if (currentUrl === linkUrl) {
        link.classList.add("ativo");
        linkAtivo = link;
    }
});

// Se não encontrou, pega o primeiro por segurança
if (!linkAtivo) linkAtivo = navLinksItems[0];

// ===== GARANTE QUE O DOM ESTEJA RENDERIZADO ANTES DE CALCULAR A LINHA =====
window.addEventListener("load", () => {
    updateHoverLine(linkAtivo);
});

// Hover interativo
navLinksItems.forEach(link => {
    link.addEventListener("mouseenter", e => updateHoverLine(e.target));
    link.addEventListener("mouseleave", () => updateHoverLine(linkAtivo));
});

// Atualizar ao clicar
navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinksItems.forEach(l => l.classList.remove("ativo"));
        link.classList.add("ativo");
        linkAtivo = link;
        updateHoverLine(linkAtivo);
    });
});


// ===== SCROLL BAR DE CONTATOS =====
const barraContatos = document.querySelector('.contatos-rapidos');
const navBar = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        barraContatos.classList.add('oculto');
        navBar.style.top = '0';
    } else {
        barraContatos.classList.remove('oculto');
        navBar.style.top = '50px';
    }
});


// ===== MENU HAMBURGER RESPONSIVO =====
const menuHamburger = document.querySelector('.menu-hamburg');
const btFecharMenu = document.querySelector('.fechar-menu');
const navLinksMobile = document.querySelector('.nav-links');

menuHamburger.addEventListener('click', () => {
    navLinksMobile.classList.toggle('active');
});

btFecharMenu.addEventListener('click', () => {
    navLinksMobile.classList.toggle('active');
});
