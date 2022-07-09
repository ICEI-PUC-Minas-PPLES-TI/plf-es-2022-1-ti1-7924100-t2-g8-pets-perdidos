var ola = document.getElementById("ola");

        if(localStorage.getItem("validacao") != null){
            // alert("Sessão Expirada, faça Login Novamente");
            // window.location.href = "./login.html";
            let user = JSON.parse(localStorage.getItem("user"));
            console.log(user);
            nome = user.nome;
            console.log(nome);
            ola.setAttribute("onclick", "window.location='../tela_de_perfil/perfil.html'");
            ola.textContent = nome;
        }

let dbPets = JSON.parse(localStorage.getItem("dbpets"));
        

if(dbPets == undefined){
    let dbPet = [];
    
    let pet1 = {
        id: 34536,
        regiao: "Belo Horizonte",
        raça: "Husky",
        Email: "ana@gmail.com",
        sexo: "Macho",
        nome: "Diamond",
        numero: "33292933",
        descricao: "Ele é muito amigavel, qualquer informação já ajuda!",
        cor: "Branco",
        foto: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1257560163-scaled-e1610062322469.jpg",//tentativa
    };
    
    let pet2 = {
        id: 34536,
        regiao: "Belo Horizonte",
        raça: "Husky",
        Email: "ana@gmail.com",
        sexo: "femea",
        nome: "Saphira",
        numero: "33292933",
        descricao: "Ela é uma cachorra brincalhona e atende pelo nome",
        cor: "Branco",
        foto: "https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg",//tentativa
    };
    let pet3 = {
        id: 34536,
        regiao: "Belo Horizonte",
        raça: "Pitbull",
        Email: "ana@gmail.com",
        sexo: "Macho",
        nome: "Bob",
        numero: "33292933",
        descricao: "Ele é muito manso e fugiu de casa recentemente, qualquer ajuda é útil",
        cor: "Branco",
        foto: "https://www.petz.com.br/blog/wp-content/uploads/2021/02/raca-de-cachorro-grande-2-1280x720.jpg",//tentativa
    };

    dbPet.push(pet1);
    dbPet.push(pet2);
    dbPet.push(pet3);

    localStorage.setItem("dbpets", JSON.stringify(dbPet));
}




// let pet1 = document.getElementById("pet1");
// let pet2 = document.getElementById("pet2");
// let pet3 = document.getElementById("pet3");

let pets = document.getElementById("pets-perdidos");

dbPets.forEach((item) =>{

    pets.innerHTML +=` <div class="col-md-4">
    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
            <div class="frontside">
                <div class="card">
                    <div class="card-body text-center">
                        <p><img class=" img-fluid"  src="${item.foto}" alt="card image"></p>
                            <h4 class="card-title">${item.nome}</h4>
                        <p class="card-text">${item.descricao}.</p>
                    <a href="" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                </div>
            </div>
        </div>
        <div class="backside">
            <div class="card">
                <div class="card-body text-center">
                    <h4 class="card-title">Informações</h4>
                    <p class="card-text">colocar TELEFONE futuramente.</p>
                    <h4 class="card-title"><a href = "/mostrarPet/showpet.html?id=">CONTATAR</h4><a/>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="">
                                <i class="fa fa-skype"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="">
                                <i class="fa fa-google"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`


})

