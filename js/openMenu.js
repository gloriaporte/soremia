/* Aqui estão as funções para o menu collapsed, no caso tem uma função para "abrir" e outra para "fechar" o menu */

//Função para abrir o menu

function openMenu() {
    document.getElementById("open-icon").classList.add("fa-rotate-90");
    document.getElementById("open-icon").style.transition = "all 0.6s";
    document.getElementById("open-icon").style.display = "hidden";
    document.getElementById("close-icon").classList.add("fa-rotate-180");
    document.getElementById("close-icon").style.transition = "all 0.6s";
    document.getElementById("menu").style.border = "0.8px solid rgb(179, 137, 60)";
    document.getElementById("menu").style.height = "448px";    

}

//Função para fechar o menu
function closeMenu() {
    document.getElementById("menu").style.height = "0";
    document.getElementById("menu").style.border = "none";
    document.getElementById("open-icon").classList.remove("fa-rotate-90");
    document.getElementById("open-icon").style.transition = "all 0.6s";
    document.getElementById("close-icon").classList.remove("fa-rotate-180");
    document.getElementById("close-icon").style.transition = "all 0.6s";
    document.getElementById("open-icon").style.display = "block";

}