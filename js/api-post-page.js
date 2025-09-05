const API_BASE = 'https://api.institutohandmaria.org/wp-json/wp/v2';

// DOM
const elTitle = document.getElementById('post-title');
const elDate = document.getElementById('post-date');
const elAuthor = document.getElementById('post-author');
const elContent = document.getElementById('post-content');
const elRelacionados = document.getElementById('relacionados-cards');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// ID da URL
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

function stripHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  return div.textContent || div.innerText || '';
}

async function carregaPost() {
  if (!postId) {
    elContent.innerHTML = '<p>Post não encontrado.</p>';
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/posts/${postId}?_embed=1`);
    const post = await res.json();

    elTitle.textContent = stripHTML(post.title.rendered);
    elDate.textContent = new Date(post.date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    // Autor fixo
    elAuthor.textContent = "Instituto Hand Maria";

    elContent.innerHTML = post.content.rendered;

    // Ajusta galeria
    elContent.querySelectorAll('figure img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });

    // Compartilhar
    const url = window.location.href;
    document.getElementById('share-facebook').href =
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    document.getElementById('share-twitter').href =
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title.rendered)}`;
    document.getElementById('share-linkedin').href =
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title.rendered)}`;
    document.getElementById('share-whatsapp').href =
      `https://wa.me/?text=${encodeURIComponent(post.title.rendered + ' ' + url)}`;

    // Relacionados
    carregaRelacionados(postId, post.categories[0]);
  } catch (err) {
    console.error(err);
    elContent.innerHTML = '<p>Erro ao carregar o post.</p>';
  }
}

async function carregaRelacionados(idAtual, categoria) {
  try {
    const res = await fetch(
      `${API_BASE}/posts?per_page=3&_embed=1&categories=${categoria}&exclude=${idAtual}`
    );
    const posts = await res.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      elRelacionados.innerHTML = '<p>Nenhum post relacionado.</p>';
      return;
    }

    elRelacionados.innerHTML = posts.map(p => `
      <a href="post.html?id=${p.id}" class="card-relacionado">
        <figure>
          <img src="${
            p._embedded['wp:featuredmedia']
              ? p._embedded['wp:featuredmedia'][0].source_url
              : 'https://via.placeholder.com/400x250?text=Sem+Imagem'
          }" alt="${stripHTML(p.title.rendered)}">
        </figure>
        <h3>${stripHTML(p.title.rendered)}</h3>
      </a>
    `).join('');
  } catch (err) {
    console.error(err);
    elRelacionados.innerHTML = '<p>Erro ao carregar relacionados.</p>';
  }
}

// Eventos lightbox
lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Init
carregaPost();
