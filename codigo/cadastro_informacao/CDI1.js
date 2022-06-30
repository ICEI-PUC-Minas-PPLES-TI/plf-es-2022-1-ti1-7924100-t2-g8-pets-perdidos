function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            pets: [
                { regiao: "Próxima ao supermercado x, no bairro x, na rua x", 
                  raça: "Pitbull",
                  email: "-----@gmail.com",
                  sexo: "Macho",
                  numero: "(32)999887766",
                  descricao: "O cachorro..",
                  Cor: "Azul"},                
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirPet() {
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo pet
    let strRegiao = document.getElementById('campoRegiao').value;
    let strRaça = document.getElementById('campoRaça').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strSexo = document.getElementById('campoSexo').value;
    let strNumero = document.getElementById('campoNumero').value;
    let strDescricao = document.getElementById('campoDescricao').value;
    let strCor = document.getElementById('CorDoAnimal').value;
    let novoPet = {
        regiao: strRegiao,
        raça: strRaça,
        Email: strEmail,
        sexo: strSexo,
        numero: strNumero,
        descricao: strDescricao,
        cor: strCor,
    };
    objDados.pets.push(novoPet);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    // Atualiza os dados da tela
    imprimeDados();
}

function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();

    for (i = 0; i < objDados.pets.length; i++) {
        strHtml += `<p>${objDados.pets[i].regiao} - ${objDados.pets[i].raça} - ${objDados.pets[i].email} - ${objDados.pets[i].cor} ${objDados.pets[i].sexo} - ${objDados.pets[i].numero} - ${objDados.pets[i].descricao}</p>`
    }

    tela.innerHTML = strHtml;
}
function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }


document.getElementById('bCarregar').addEventListener('click', imprimeDados);
document.getElementById('bInfo').addEventListener('click', incluirPet);

