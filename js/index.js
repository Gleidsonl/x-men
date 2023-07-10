
//Selecionar todos com a class personagem
const personagens = document.querySelectorAll('.personagem');
// identificando todos personagem e adicionando evento ao passar o mouse
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
       //Corrigir para dispositivos mobile
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: 'smooth'});
        }
        // Remover personagem selecionado
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
       
        // Adicionar class selecionado ao card que o mouse tiver 
        personagem.classList.add('selecionado');

       //pegar elemento do personagem grande pra add info
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //Pegando nome dos personagens pelo id e adicionando no caminho da imagem
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `imagens/card-${idPersonagem}.png`; 

        //Alterar nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-nome');

        //Alterar descrição do personagem
        const descricaoPersonagem = document.getElementById("descricao-personagem");
        descricaoPersonagem.innerText = personagem.getAttribute('data-descricao');

    })
})
