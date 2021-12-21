var hpJogador1;
var hpJogador2;
var baseAtaqueJogador1;
var baseAtaqueJogador2;

document.getElementById("btn1").onclick = loadPk;
document.getElementById("btn2").onclick = loadBatalha;
document.getElementById("btn3").onclick = jogarNovamente;

function loadPk() {

    const joador1 = Math.floor(Math.random() * 150);
    const joador2 = Math.floor(Math.random() * 150);

    let url = 'https://pokeapi.co/api/v2/pokemon/' + joador1;
    let url2 = 'https://pokeapi.co/api/v2/pokemon/' + joador2;

    console.clear

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        hpJogador1 = data['stats']['0']['base_stat'];
        baseAtaqueJogador1 = data['stats']['1']['base_stat'];
        document.getElementById('nome').innerHTML = data['name'].toUpperCase();
        document.getElementById('numero').innerHTML = "ID: " + data['id'];
        document.getElementById('hp').innerHTML = "HP: " + hpJogador1;
        document.getElementById('baseAtaque').innerHTML = "Ataque Base: " + baseAtaqueJogador1;
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src', img);
    })
    .catch((erro) => {
        console.log("Erro: " + erro);
    });

    fetch(url2)
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        hpJogador2 = data2['stats']['0']['base_stat'];
        baseAtaqueJogador2 = data2['stats']['1']['base_stat'];
        document.getElementById('nome2').innerHTML = data2['name'].toUpperCase();
        document.getElementById('numero2').innerHTML = "ID: "+ data2['id'];
        document.getElementById('hp2').innerHTML = "HP: " + hpJogador2;
        document.getElementById('baseAtaque2').innerHTML = "Ataque Base: " + baseAtaqueJogador2;
        let img2 = data2['sprites']['front_default'];
        document.getElementById('pic2').setAttribute('src', img2);
    })
    .catch((erro) => {
        console.log("Erro: " + erro);
    });

    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn3").disabled = false;


}

function loadBatalha() {

    var hpFInalJogador1 = hpJogador1 - baseAtaqueJogador2;
    var hpFinalJogador2 = hpJogador2 - baseAtaqueJogador1;
    if(hpJogador1 < baseAtaqueJogador2 && hpJogador2 < baseAtaqueJogador1) {
        document.getElementById('resultado').innerHTML = "EMPATE!";
    } else if (hpJogador1 > baseAtaqueJogador2) {
        document.getElementById('resultado').innerHTML = "JOGADOR 1 VENCEU!";
    } else {
        document.getElementById('resultado').innerHTML = "JOGADOR 2 VENCEU!";
    }

    document.getElementById('hp').innerHTML = "HP Final: " + hpFInalJogador1;
    document.getElementById('hp2').innerHTML = "HP Final: " + hpFinalJogador2;

    document.getElementById("btn3").disabled = false;
}

function jogarNovamente() {
    location.reload();
}
