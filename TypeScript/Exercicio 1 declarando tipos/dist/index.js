const planets = [];
let menu = true;
do {
    let userOption = prompt(`Seja bem vindo ao sistema de exploração de planetas:
        
        Selecione uma opção atraves da indicação do numero:
        
        Opção 1: Criar um novo planeta.
        Opção 2: Atualizar situação do planeta.
        Opção 3: Adicionar um satelite a um planeta.
        Opção 4: Remover um satelite de um planeta.
        Opção 5: Listar planetas salvos.
        Opção 6: Sair.
        `);
    switch (userOption) {
        case "1":
            createPlanets();
            break;
        // case "2":
        //     updatePlanetSituation();
        //     break;
        // case "3":
        //     addSatellite();
        //     break;
        // case "4":
        //     removeSatellite();
        //     break;
        // case "5":
        //     listPlanets();
        //     break;
        // case "6":
        //     alert("Volte sempre!");    
        //     menu = false;                
        //     break;
        // default:
        //     alert("Opção inválida!");
        //     break;
    }
} while (menu === true);
function createPlanets() {
    let planet = {
        name: prompt("Qual o nome do planeta?"),
        coordinate: Number(prompt("Qual a coordenada do planeta?")),
        situation: "Desconhecido",
        satellites: []
    };
    if (planet.name && planet.coordinate) {
        planets.push(planet);
    }
    else {
        alert("Preencha todos os campos corretamente!");
    }
}
