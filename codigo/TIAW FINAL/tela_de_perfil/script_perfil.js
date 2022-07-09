
if(localStorage.getItem("validacao") == null){
    alert("Sessão Expirada, faça Login Novamente");
    window.location.href = "../main_page_FindMe/index.html";
}


let nome_user = document.getElementById("user-name");
let bio = document.getElementById("biografio");
let valueBio;

let user = JSON.parse(localStorage.getItem("user"));

let listaUser = JSON.parse(localStorage.getItem("dbFindMe"))
        
            listaUser.forEach((item) =>{
                try{
                    if(user.email == item.emailCadastrado){
                        if(item.perfilUser.biografia == undefined){
                            bio.innerHTML = `<p id="biografio">Bio... <img onclick="editarBio()" src="./images/pencil.png" width="15px"></p>`
                        }
                        else{
                            bio.innerHTML = `<p id="biografio">${item.perfilUser.biografia}<img onclick="editarBio()" src="./images/pencil.png" width="15px"></p>`
                        }
                    }
                }catch{
                    console.log("Houve um erro");
                }
            })


        let loadPage = function(){
            nome_user.innerHTML = user.nome;
            if(valueBio != null){
                bio.textContent = valueBio;
            }
        }

        loadPage();        
        
        let editarBio = function(){
            
            // bio.setAttribute("style", "display: none")
            bio.innerHTML = "<textarea id='textBio'></textarea><br><button onclick='saveBio()'>Salvar</button>"
            let textBio = document.getElementById("textBio");
            textBio.focus();
            //let textBio = document.getElementById("textBio");
        }
        let saveBio = function(){
            let bio = document.getElementById("biografio");
            let textBio = document.getElementById("textBio");
            bio.innerHTML = `<p id="biografio">${textBio.value}<img onclick="editarBio()" src="./images/pencil.png" width="15px"></p>`
            user.perfilUser.biografia = textBio.value;

            localStorage.setItem("user", JSON.stringify(user));
            listaUser = JSON.parse(localStorage.getItem("dbFindMe"))
        
            listaUser.forEach((item) =>{
                if(user.email == item.emailCadastrado){
                    item.perfilUser.biografia = textBio.value;
                }
            })
            
            localStorage.setItem("dbFindMe", JSON.stringify(listaUser));

        }

        let addPetPerdido = function(){
            let divPetPerdido = document.getElementById("add-pet-perdido");
            divPetPerdido.setAttribute("style", "display: block");
        }

        let addPetEncontrado = function(){
            let divPetEncontrado = document.getElementById("add-pet-encontrado");
            divPetEncontrado.setAttribute("style", "display: block");
        }

        let cancel = function(div){
            let divPet = document.getElementById(div)
            divPet.setAttribute("style", "display: none");
        }
        
        let sair = function(){
            localStorage.removeItem("validacao");
            localStorage.removeItem("user");
            window.location.href = "../main_page_FindMe/index.html";
        }
