const rodapeSite = `
        <div class="rodape">
            <div class="rodape-container">

                <!-- Coluna 1: Logo / descrição -->
                <div class="rodape-coluna">
                    <img src="assets/logos/logo-com-fundo.svg" alt="Instituto Hand Maria" class="rodape-logo">
                    <p>
                        O Instituto Hand Maria promove a transformação social através da educação, cultura, esportes e
                        inclusão,
                        sempre contando com o apoio de parceiros e da comunidade.
                    </p>
                </div>

                <!-- Coluna 2: Links úteis -->
                <div class="rodape-coluna">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="inscricoes.html">Inscrições</a></li>
                        <li><a href="noticias.html">Noticias</a></li>
                        <li><a href="sobre-nos.html">Sobre nós</a></li>
                        <li><a href="transparencia.html">Transparência</a></li>
                        <li><a href="doe.html">Doações</a></li>
                        <li><a href="impacto.html">Nosso impacto</a></li>
                        <li><a href="quero-apoiar.html">Quero apoiar</a></li>
                        <li><a href="politica-privacidade.html">Política de Privacidade</a></li>
                        <li><a href="termos-uso.html">Termos de Uso</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Contatos -->
                <div class="rodape-coluna">
                    <h3>Contato</h3>
                    <p><strong>Telefone:</strong> <a href="tel:+551128932631" target="_blank">(11) 92893-2631</a></p>
                    <p><strong>Telefone:</strong> <a href="tel:+5511988404276" target="_blank">(11) 98840-4276</a></p>
                    <p><strong>E-mail:</strong> <a
                            href="mailto:contato@institutohandmaria.org">contato@institutohandmaria.org</a></p>
                    <p><strong>E-mail:</strong> <a
                            href="mailto:institutohandmaria@gmail.com">institutohandmaria@gmail.com</a></p>
                    <p><strong>Endereço:</strong> R. José Ferreira Crespo, 674 - Jardim Sao Vicente São Paulo/SP</p>
                </div>

                <!-- Coluna 4: Redes sociais -->
                <div class="rodape-coluna">
                    <h3>Siga-nos</h3>
                    <div class="rodape-redes">
                        <a href="https://web.facebook.com/icehandmaria" target="_blank"><img src="assets/icones/icon-facebook.svg" alt="Facebook"></a>
                        <a href="https://www.instagram.com/instituto.handmaria/" target="_blank"><img src="assets/icones/icon-instagram.svg" alt="Instagram"></a>
                        <a href="https://wa.me/5511988404276" target="_blank"><img src="assets/icones/icon-whatsapp.svg" alt="WhatsApp"></a>
                    </div>
                </div>

            </div>

            <!-- Créditos -->
            <div class="rodape-creditos">
                <p>© 2025 Instituto Hand Maria – Todos os direitos reservados.</p>
                <p>Desenvolvido por <a href="https://wa.me/5511952011031" target="_blank">Mike Araujo</a></p>
            </div>
        </div>
`
document.querySelector('#insert-radape').innerHTML = rodapeSite


