if(localStorage.getItem("validacao") == null){
  alert("Faça Login para Continuar");
  window.location.href = "../login/login.html";
}

let user = JSON.parse(localStorage.getItem("user"));

let listaUser = JSON.parse(localStorage.getItem("dbFindMe"));

let dbPets = JSON.parse(localStorage.getItem("dbpets") || "[]");
console.log(dbPets);


function save() {
    let idRand = Math.floor(Math.random() * 999999999 + 1);
    let imgFile = document.getElementById('fotoAnimal').value;//tentativa
    let strRegiao = document.getElementById('campoRegiao').value;
    let strRaça = document.getElementById('campoRaça').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strSexo = document.getElementById('campoSexo').value;
    let strNumero = document.getElementById('campoNumero').value;
    let strDescricao = document.getElementById('campoDescricao').value;
    let strCor = document.getElementById('CorDoAnimal').value;
    let strNomePet = document.getElementById('campoNomePet').value;
    let novoPet = {
        id: idRand,
        regiao: strRegiao,
        raça: strRaça,
        Email: strEmail,
        sexo: strSexo,
        nome: strNomePet,
        numero: strNumero,
        descricao: strDescricao,
        cor: strCor,
        foto: imgFile,//tentativa
    };
    //objDados.push(novoPet);

    // Salvar os dados no localStorage novamente
    salvaDados(novoPet);
    salvaDb(novoPet);

    // Atualiza os dados da tela
    //imprimeDados();
}


function salvaDb(pet){

    let dbPets = JSON.parse(localStorage.getItem("dbpets") || "[]");

    db.push(pet);

    localStorage.setItem("dbpets", JSON.stringify(dbPets));

}


function salvaDados(dados) {
    listaUser.forEach((item) =>{
        try{
            if(user.id == item.id){
                item.pets.petEncontrados.push(dados);
               
                //dentro do user no banco de dados

            }
        }catch{
            console.log("Houve um erro");
        }
    })
    localStorage.setItem("dbFindMe", JSON.stringify(listaUser));
    //localStorage.setItem('db', JSON.stringify(dados));
}

//document.getElementById('bCarregar').addEventListener('click', imprimeDados);
//document.getElementById('bInfo').addEventListener('click', incluirPet);

