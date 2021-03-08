var indice = 0;
var iCenario;
var iPersonagem;
var iButton;
var txtOpcaoA;
var txtOpcaoB;
var txtOpcaoC;
var img;
var img2;

window.onload = function(){
    document.getElementById('32654785').style.display = 'none';
    document.getElementById('88451247').style.display = 'none';
}

function selecionarCenario(iCenario){
    for(i=0;i<matCenarios.length;i++){
        if(matCenarios[i][0]==iCenario){
            img = matCenarios[i][1];
            break;
        }
    }
}//Percorrer Cenarios

function selecionarPersonagem(iPersonagem){
    for(i=0;i<matPersonagens.length;i++){
        
        //document.write(iPersonagem+"-");
        //document.write(matPersonagens[i][0]+"&nbsp");
        if(matPersonagens[i][0]==iPersonagem){
            img2 = matPersonagens[i][1];
            break;
        }
    }
}//Percorrer Personagens

function gamePlay(){
    for(i=0;i<matHistoria.length;i++){
        if(indice==matHistoria[i][0]){
            tipo = testeJanela(matHistoria[i][1],matHistoria[i][2],matHistoria[i][3]);
            /*
            if(tipo == 2){
                indice = matHistoria[i][2];
                tipo = 4;
                gamePlay(indice);
                return 0;
            }//retornar rota normal
            //*/
            if(tipo == 3){
                fimDeJogo();
                return 0;
            }// fim de jogo
            if(tipo == 4){
                indice++;
                txtOpcaoA = matHistoria[i][1];
                document.getElementById('34875126').innerText = txtOpcaoA;
                iCenario = matHistoria[i][2];
                iPersonagem = matHistoria[i][3];
                selecionarCenario(iCenario);
                selecionarPersonagem(iPersonagem);
                document.getElementById("63487154").src = img;
                document.getElementById("36294781").src = img2;
                document.getElementById('32654785').style.display = 'none';
                document.getElementById('88451247').style.display = 'none';
				confTeste();
                return 0;
            }//rota normal
        }//ifMat
    }//forMat
}//Percorrer Rota

function fimDeJogo(){
    indice = 1;
    alert("Fim de Jogo!");
    document.getElementById('34875126').innerText = "Start";
    document.getElementById("63487154").src = "https://images2.imgbox.com/2e/c1/MI32eZpD_o.png";
    document.getElementById("36294781").src = "";
}//encerrar jogo e zerar

function selecionarBtn(iButton){
    for(i=0;i<matOpcaoTexto.length;i++){
        if(iButton == matOpcaoTexto[i][0]){
            txtOpcaoA = matOpcaoTexto[i][1];
            document.getElementById('34875126').innerText = txtOpcaoA;
            document.getElementById('32654785').style.display = '';
            txtOpcaoB = matOpcaoTexto[i][2];
            document.getElementById('36241879').innerText = txtOpcaoB;
            document.getElementById('88451247').style.display = '';
            txtOpcaoC = matOpcaoTexto[i][3];
            document.getElementById('62541398').innerText = txtOpcaoC;
            cap = null;
            return 0;
        }
    }
}//ativar botões



function recebeBtn(alt){
    verifcarPontos(iButton,alt);
    selecionarRota(iButton,alt);
    tipo = 4;
    gamePlay(indice);
}

function confTeste() {
            document.getElementById(36294781).style.height="250px";
            document.getElementById(36294781).style.width="250px";
        }

function selecionarRota(iButton,alt){
    for(i=0;i<matMudarRota.length;i++){
        if(matMudarRota[i][0]==iButton){
            indice = matMudarRota[i][alt];
            return 0;
        }
    }
}//mudar indice de rota

function verifcarPontos(iButton,alt){
    for(i=0;i<matPont.length;i++){
        if(matPont[i][0]==iButton){
            pontos = pontos + matPont[i][alt];
            return 0;
        }
    }
}//somar pontos
//*/

function testeJanela(a,b,c){
    if((a==null)&(b!=null)&(c!==null)){return 1;}//abri opcao
    else if((a==null)&(b=null)&(c!==null)){return 2;}//retomar rota
    else if((a==null)&(b==null)&(c==null)){return 3;}//fim de jogo
    else{return 4;}
}

function play(alt){
    gamePlay();
}
function btnOpcaoA() {play(1);};
function btnOpcaoB() {play(1);};
function btnOpcaoC() {play(1);};