// Exibir modal de login

function initModal(id){
    const modal = document.getElementById(id);
    modal.classList.add('mostrar');
}
function endModal(id){
    const modal = document.getElementById(id);
    modal.classList.remove('mostrar');
}