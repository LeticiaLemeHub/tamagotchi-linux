let fome = 100;
let diversao = 100;
let estudos = 100;
let higiene = 100;
let sono = 100;

const fomeStatus = document.getElementById("fome-status");
const diversaoStatus = document.getElementById("diversao-status");
const estudosStatus = document.getElementById("estudos-status");
const higieneStatus = document.getElementById("higiene-status");
const sonoStatus = document.getElementById("sono-status");

const botaoAlimentar = document.getElementById("alimentar");
const botaoBrincar = document.getElementById("brincar");
const botaoEstudar = document.getElementById("estudar");
const botaoBanho = document.getElementById("banho");
const botaoDormir = document.getElementById("dormir");

function atualizarStatus() {
    fomeStatus.textContent = fome;
    diversaoStatus.textContent = diversao;
    estudosStatus.textContent = estudos;
    higieneStatus.textContent = higiene;
    sonoStatus.textContent = sono;
}

botaoAlimentar.addEventListener("click", () => {
    fome = Math.min(fome + 5, 100);
    atualizarStatus();
});

botaoBrincar.addEventListener("click", () => {
    diversao = Math.min(diversao + 7, 100);
    atualizarStatus();
});

botaoEstudar.addEventListener("click", () => {
    estudos = Math.min(estudos + 10, 100);
    atualizarStatus();
});

botaoBanho.addEventListener("click", () => {
    higiene = Math.min(higiene + 5, 100);
    atualizarStatus();
});

botaoDormir.addEventListener("click", () => {
    sono = Math.min(sono + 6, 100);
    atualizarStatus();
});

setInterval(() => {
    fome = Math.max(fome - 2, 0);
    diversao = Math.max(diversao - 2, 0);
    estudos = Math.max(estudos - 3, 0);
    higiene = Math.max(higiene - 2, 0);
    sono = Math.max(sono - 2, 0);
    atualizarStatus();
}, 5000); 

atualizarStatus();


function modoEscuro() {
    const root = document.documentElement;
    const corpo = document.body;
    const botaoModo = document.getElementById("toggle-theme");
    const imagemCico = document.getElementById("ciço");

    corpo.classList.toggle("tema-escuro");

    const temaEscuroAtivo = corpo.classList.contains("tema-escuro");

    if (temaEscuroAtivo) {

        botaoModo.className = "fa-brands fa-linux";
        imagemCico.src = "assets/lobinho.gif";
        imagemCico.alt = "buguinha-lobo";
        imagemCico.style.width = '250px';
        imagemCico.style.height = '250px';
    } else {
        botaoModo.className = "fa-solid fa-dog";
        imagemCico.src = "assets/ciço.gif";
        imagemCico.alt = "ciço-pinguim";
        imagemCico.style.width = '150px';
        imagemCico.style.height = '150px';
    }
}
