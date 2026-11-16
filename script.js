
const botaoInicio = document.getElementById("botao-inicio");
const conteudo = document.querySelector("main");

botaoInicio.addEventListener("click", function() {

    // PRIMEIRA ETAPA
    conteudo.innerHTML = `
        <p class="subtitulo">UMA PEQUENA SURPRESA</p>
        <h1>Você gosta de surpresas?</h1>
        <p class="mensagem">
            Porque preparei uma coisinha especial para você. ♡
        </p>
        <button id="botao-proximo">Continuar ♡</button>
    `;

    const botaoProximo = document.getElementById("botao-proximo");

    botaoProximo.addEventListener("click", function() {

        // SEGUNDA ETAPA
        conteudo.innerHTML = `
            <p class="subtitulo">ANTES DE CONTINUAR...</p>
            <h1>Você sabe o quanto é especial?</h1>
            <p class="mensagem">
                Espero que sim, mas quero te lembrar disso. ♡
            </p>
            <button id="botao-declaracao">Continuar ♡</button>
        `;

        const botaoDeclaracao = document.getElementById("botao-declaracao");

        botaoDeclaracao.addEventListener("click", function() {

            // TERCEIRA ETAPA
            conteudo.innerHTML = `
                <p class="subtitulo">UMA COISA QUE EU QUERIA TE DIZER</p>
                <h1>Você é incrível, Janaína.</h1>
                <p class="mensagem">
                    Admiro muito quem você é, seu jeito, sua inteligência
                    e a maneira como enfrenta as coisas.
                </p>
                <p class="mensagem">
                    E ainda tenho algumas lembranças para compartilhar...
                </p>
                <button id="botao-fotos">
                    Tenho mais uma coisa para mostrar... ♡
                </button>
            `;

            const botaoFotos = document.getElementById("botao-fotos");

            botaoFotos.addEventListener("click", function() {

                // QUARTA ETAPA - GALERIA DE FOTOS
                conteudo.innerHTML = `
                    <p class="subtitulo">NOSSAS MEMÓRIAS</p>

                    <h1>Pequenos momentos, grandes lembranças.</h1>

                    <p class="mensagem">
                        Algumas das minhas lembranças favoritas têm você nelas. ♡
                    </p>

                    <div class="galeria">

                        <div class="foto">
                            <img src="imagens/foto1.jpg" alt="Um momento nosso">
                            <p>
                                Até os momentos mais simples são especiais com você.
                            </p>
                        </div>

                        <div class="foto">
                            <img src="imagens/foto2.jpg" alt="Um momento divertido nosso">
                            <p>
                                Com você, até as situações mais aleatórias viram lembranças.
                            </p>
                        </div>

                        <div class="foto">
                            <img src="imagens/foto3.jpg" alt="Uma lembrança especial">
                            <p>
                                Gosto de cada detalhe que faz você ser quem é.
                            </p>
                        </div>

                        <div class="foto">
                            <img src="imagens/foto4.jpg" alt="Nossas mãos dadas">
                            <p>
                                Que bom é ter sua mão junto da minha.
                            </p>
                        </div>

                    </div>

                    <p class="mensagem">
                        E essas são apenas algumas das tantas lembranças
                        que ainda quero construir com você.
                    </p>

                    <button id="botao-carta">
                        Tem algo que ainda quero te dizer ♡
                    </button>
                `;

                const botaoCarta = document.getElementById("botao-carta");

                botaoCarta.addEventListener("click", function() {

                    // QUINTA ETAPA - CARTA
                    conteudo.innerHTML = `
                        <section class="carta-final">

                            <p class="subtitulo">
                                ESCRITO ESPECIALMENTE PARA VOCÊ
                            </p>

                            <div class="decoracao">🥀</div>

                            <h1>Para você, Janaína.</h1>

                            <div class="linha-decorativa"></div>

                            <div class="texto-carta">

                                <p>Janaína,</p>

                                <p>
                                    Eu queria que você soubesse o quanto é especial
                                    para mim. Às vezes, acho difícil colocar em palavras
                                    tudo aquilo que sinto, mas hoje quis tentar.
                                </p>

                                <p>
                                    Admiro muito a pessoa que você é. Sua inteligência,
                                    seu jeito, sua determinação e a forma como corre
                                    atrás das coisas. São detalhes que talvez você nem
                                    perceba, mas que eu vejo e admiro muito.
                                </p>

                                <p>
                                    Gosto dos nossos momentos, das nossas conversas,
                                    das risadas e até das situações mais bobas.
                                    Porque, no fim, são essas pequenas coisas que
                                    acabam se tornando algumas das minhas lembranças
                                    favoritas.
                                </p>

                                <p>
                                    Não quero que você esqueça o quanto é importante
                                    e o quanto merece coisas boas. Espero continuar
                                    compartilhando momentos, histórias e muitas
                                    lembranças ao seu lado.
                                </p>

                                <p>
                                    Obrigado por ser você e por fazer parte da minha vida.
                                </p>

                            </div>

                            <div class="linha-decorativa"></div>

                            <p class="assinatura">Com todo meu carinho,</p>

                            <h2>Alguém que admira muito você. ♡</h2>

                            <div class="decoracao-final">♥</div>

                            <button id="botao-ultima" class="botao-ultima">
                                Ainda tenho uma última coisa... ♡
                            </button>

                        </section>
                    `;

                    const botaoUltima = document.getElementById("botao-ultima");

                    botaoUltima.addEventListener("click", function() {

                        // SEXTA ETAPA - MENSAGEM FINAL
                        conteudo.innerHTML = `
                            <section class="carta-final mensagem-final">

                                <p class="subtitulo">
                                    SÓ MAIS UMA COISINHA...
                                </p>

                                <div class="decoracao">🥀</div>

                                <h1>E sabe de uma coisa?</h1>

                                <div class="linha-decorativa"></div>

                                <h2 class="frase-final">
                                    Eu escolheria viver tudo isso outra vez,
                                    se fosse com você. ♡
                                </h2>

                                <p class="texto-final">
                                    Obrigado por ser uma das partes mais bonitas
                                    da minha história.
                                </p>

                                <div class="decoracao-final">♥</div>

                            </section>
                        `;

                    });

                });

            });

        });

    });

});
