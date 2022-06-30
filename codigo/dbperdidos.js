var db = {
    dados: [
        {
            nome: 'Gugu',
            imagem:'./img/bullterrier.jpg',
            descricao: 'Bull terrier preto macho com uma manchinha branca no olho direito, muito dócil e atende pelo nome.',
            historia: 'Fugiu enquanto estávamos passeando, a coleira abriu e ele saiu correndo. Moro na zona Leste e acredito que ele não tenha ido muito longe pois sempre se cansa depois de andar muito. Ofereço recompensa.',

        }, {
            nome: 'Alfa',
            imagem: './img/caramelo.jpg',
            descricao: 'Cadela SRD com o pelo cor de caramelo. Porte médio e muito medrosa.',
            historia: 'A grade do portão da minha casa está solta em um ponto, ela viu a abertura e fugiu, eu tentei ir atrás dela mas perdi de vista depois de cerca de 30 minutos procurando. Por favor me ajude!! Região do Barreiro',
        }, {
            nome: 'Catito',
            imagem: './img/gatoamarelo.jpg',
            descricao: 'Gato amarelo manchado com branco, pequena cicatriz em cima do olho esquerdo.',
            historia: 'Minha casa tem telas em todas as janelas, por isso, ele nunca fugi antes e eu nao sei se ele sabe o caminho de casa. Dessa vez, ele conseguiu rasgar a tela da janela da sala e fugiu. :( não sei o que fazer.',
            
        }, {
            nome: 'Buzz',
            imagem: './img/maltez.jpg',
            descricao: 'Maltez macho, pelo todo branquinho e de comprimento médio porque tosei ele recentemente, atende pelo nome mas não gosta de crianças',
            historia: 'Moro na zona Norte, ele estava aqui em casa quando fomos dormir mas quando acordei nao achei ele, então não sei como ele fugiu nem há quanto tempo está na rua. Por favor, esse cachorro é tudo que eu tenho.',
            
        }, {
            nome: 'Jet',
            imagem: './img/gatapreta.jpg',
            descricao: 'Gatinha preta, olhos azuis e rabo com a pontinha branca. Muito arisca',
            historia: 'Por favor, minha gatinha é preta e tem muita gente maldosa no mundo, nao sei o que pode acontecer. So preciso achar ela, eu moro no bairro Santa Teresa, alguém pode me ajudar?',
            
        }, {
            nome: 'Mike',
            imagem: './img/golden.jpg',
            descricao: 'Golden retriever adulto, bem grande e pelo todo dourado',
            historia: 'Ele mora comigo e com meu marido no nosso sítio, porém quando fomos abrir o portão para receber nossas visitas ele saiu e nao sabemos onde ele foi parar. Ofereço recompensa. Condomínio Casa Branca.',
            
        }, {
            nome: 'Nina',
            imagem: './img/york.jpg',
            descricao: 'É uma yorkshire pequenininha, pelo preto e marrom e é muito manhosa e boazinha',
            historia: 'Moro em apartamento e a pessoa que me ajuda na limpeza aqui deixou a porta aberta quando foi sair, ela ficou um tempo dentro do prédio e quando um carro entrou na garagem o motorista viu ela saindo e me avisou. Preciso de ajuda, moro em Venda Nova',
            
        }, {
            nome: 'Popó',
            imagem: './img/calopsita.jpg',
            descricao: 'É uma calopsita cinza com bochechas laranjinhas.',
            historia: 'Ela nunca fugiu porque tem muito medo de chegar perto das janelas, não sei o que aconteceu mas ela fugiu e eu nao vi para onde ela foi, as asinhas dela são cortadas então ela não deve ter ido longe, preciso achar ela logo!',
            
        }, {
            nome: 'Téo',
            imagem:'./img/lulu.jpg',
            descricao: 'Mini lulu da pomerania filhote, é muito pequeno!!',
            historia: 'Ele fugiu depois de tomar sua terceira vacina no veterinário, estávamos na porta da minha casa e ele viu um outro cachorrinho e foi correndo, perdi ele de vista. Moro na Zona oeste e preciso de ajuda!',
            
        }
    ]

}

window.onload = () => {
    //    return
        let lista_pets = document.getElementById("lista-pets")
        lista_pets.innerHTML = '';
    
        for(let i=0;i<db.dados.length; i++ ){
    
            let divFlip=document.createElement("div");
            divFlip.classList.add("col-md-4");
            lista_pets.appendChild(divFlip);
    
            let imageflip=document.createElement("div");
            imageflip.classList.add("image-flip");
            divFlip.appendChild(imageflip);
    
            let mainflip=document.createElement("div");
            mainflip.classList.add("mainflip");        
            imageflip.appendChild(mainflip);
    
            // parte frontside        
    
            let frontside=document.createElement("div");
            frontside.classList.add("frontside");
            mainflip.appendChild(frontside);
    
            let card=document.createElement("div");
            card.classList.add("card");
            frontside.appendChild(card);
    
            let cardbody = document.createElement("div");
            cardbody.classList.add("card-body");
            cardbody.classList.add("text-center");
            card.appendChild(cardbody);
    
            let img = document.createElement("img");
            img.setAttribute("src", db.dados[i].imagem);
            img.classList.add("img-fluid");
            cardbody.appendChild(img);
    
            let cardtitle = document.createElement("div");
            cardtitle.innerHTML = db.dados[i].nome;
            cardtitle.classList.add("card-title");
            cardbody.appendChild(cardtitle);
    
            let cardtext = document.createElement("div");
            cardtext.innerHTML = db.dados[i].descricao;
            cardtext.classList.add("card-text");
            cardbody.appendChild(cardtext);
    
            // parte backside
            
            let backside=document.createElement("div");
            backside.classList.add("backside");
            mainflip.appendChild(backside);
    
            let cardbs=document.createElement("div");
            cardbs.classList.add("card");
            backside.appendChild(cardbs);
    
            let cardbsbody = document.createElement("div");
            cardbsbody.classList.add("card-body");
            cardbsbody.classList.add("text-center");
            cardbs.appendChild(cardbsbody);
    
            let cardtext2 = document.createElement("div");
            cardtext2.innerHTML = db.dados[i].historia;
            cardtext2.classList.add("card-text");
            cardbsbody.appendChild(cardtext2);   
        }
        
    }
    