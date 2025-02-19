
document.addEventListener('DOMContentLoaded', function () {
    const autores = document.querySelectorAll('.autor');
    const livros = document.querySelectorAll('.livro1, .livro2, .livro3, .livro4'); // Seleciona todos os livros
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closePopupButton = document.getElementById('close-popup');

    // Informações dos autores
    const autoresInfo = {
        machado: {
            nome: 'Machado de Assis',
            bio: 'Joaquim Maria Machado de Assis, amplamente considerado o maior escritor brasileiro, é um dos fundadores da Academia Brasileira de Letras.',
            obras: ['Memórias Póstumas de Brás Cubas', 'Dom Casmurro', 'Quincas Borba']
        },
        aluisio: {
            nome: 'Aluísio Azevedo',
            bio: 'Aluísio Tancredo Gonçalves de Azevedo foi um escritor, jornalista, caricaturista, diplomata e contista brasileiro. É considerado, juntamente com Machado de Assis, o fundador da Academia Brasileira de Letras.',
            obras: ['O Cortiço', 'Casa de Pensão']
        },
        raul: {
            nome: 'Raul Pompeia',
            bio: 'Raul d’Ávila Pompeia foi um escritor, intelectual e abolicionista brasileiro. É famoso por seu romance O Ateneu, publicado em 1888.',
            obras: ['O Ateneu']
        }
    };

    // Informações das obras
    const obrasInfo = {
        livro1: {
            nome: 'Memórias Postumas de Brás Cubas',
            descricao: 'O romance foi escrito no século XIX, um período de grandes transformações no Brasil. Em 1881, o país ainda vivia sob o regime do Império de Dom Pedro II, e a sociedade brasileira estava marcada pela monarquia, pela escravidão e pelas profundas desigualdades sociais. A escravidão no Brasil só seria abolida em 1888, e a Proclamação da República ocorreria em 1889. Na literatura, a obra é um reflexo do movimento realista, que surgia como uma reação ao romantismo. Enquanto o romantismo enfatizava os sentimentos, o subjetivismo e a idealização da realidade, o realismo se propôs a retratar o mundo com uma visão mais objetiva e crítica. O naturalismo, que surge dentro do realismo, também influenciou a obra, sendo marcado pela análise de aspectos científicos e deterministas da vida humana.',
            autor: 'Machado de Assis (1839–1908)'
        },
        livro2: {
            nome: 'Madame Bovary',
            descricao: 'Escrita no século XIX, em pleno auge da Revolução Industrial na Europa e no contexto da sociedade burguesa francesa, a obra critica as ilusões e as frustrações das classes médias, especialmente no que diz respeito ao casamento, à educação e à busca incessante por uma vida idealizada. O romance foi um grande marco para o realismo, movimento literário que surgiu como uma reação ao romantismo e buscava retratar a realidade de forma objetiva, sem idealizações. O autor foi acusado de dar uma "imagem negativa" da sociedade, o que gerou controvérsias na época.',
            autor: 'Gustave Flaubert (1821–1880)'
        },
        livro3: {
            nome: 'O Cortiço',
            descricao: 'A obra foi publicada no final do século XIX, no auge do realismo e naturalismo no Brasil. Durante esse período, o país passava por grandes transformações, como a abolição da escravidão (1888) e o processo de urbanização das grandes cidades, especialmente no Rio de Janeiro.     O Cortiço é uma obra que retrata a vida em um cortiço no Rio de Janeiro, um lugar de aglomeração, pobreza e desigualdade social. A obra é uma análise crítica da sociedade carioca e das condições de vida dos trabalhadores, revelando a influência do meio e das circunstâncias sociais no comportamento humano.',
            autor: 'Aluísio Tancredo Gonçalves de Azevedo (1857–1913)'
        },
        livro4: {
            nome: 'Canções sem Metro',
            descricao: 'O fim do século XIX e o início do século XX no Brasil foram marcados por grandes mudanças sociais e políticas, como a Proclamação da República (1889). Nesse período, a literatura brasileira passou por várias transformações, com o advento do parnasianismo, movimento literário que buscava o perfeccionismo formal e a busca pela beleza estética. Bilac foi um dos principais representantes dessa corrente.',
            autor: 'Olavo Bilac (1865–1918)'
        }
    };

    // Função para exibir o pop-up com as informações do autor
    autores.forEach(autor => {
        autor.addEventListener('click', function () {
            const autorSelecionado = this.getAttribute('data-autor');
            const info = autoresInfo[autorSelecionado];

            popupContent.innerHTML = `
                <h2>${info.nome}</h2>
                <p>${info.bio}</p>
                <h3>Principais Obras:</h3>
                <ul>
                    ${info.obras.map(obra => `<li>${obra}</li>`).join('')}
                </ul>
            `;

            popupContainer.classList.add('show');
            popup.classList.add('show');
        });
    });

    // Função para exibir o pop-up com as informações da obra
    livros.forEach(livro => {
        livro.addEventListener('click', function () {
            const livroSelecionado = this.getAttribute('class'); // Pega a classe da obra (livro1, livro2, etc)
            const info = obrasInfo[livroSelecionado];

            popupContent.innerHTML = `
                <h2>${info.nome}</h2>
                <p>${info.descricao}</p>
                <p><strong>Autor:</strong> ${info.autor}</p>
            `;

            popupContainer.classList.add('show');
            popup.classList.add('show');
        });
    });

    // Fechar o pop-up
    closePopupButton.addEventListener('click', function () {
        popupContainer.classList.remove('show');
        popup.classList.remove('show');
    });

    // Fechar o pop-up ao clicar fora dele
    popupContainer.addEventListener('click', function (event) {
        if (event.target === this) {
            popupContainer.classList.remove('show');
            popup.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona funcionalidade ao botão de pesquisa
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Você buscou por: " + searchInput.value);
    });

    });

    // Animação ao rolar para seções
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

