/***********************
***Funcitions Play***
* Versão: 2.1
* Autor: Samira - 2020
* Coral Otome Gama
***********************/

/*
* Sobre:
* Funções padrões do jogo (usada em todos capítulos)
* Observações:
* variaveis a declarar: indice, afinidades (código próprio)
* indice de mudança de rota no texto
*/

//temporário
var indice = 1;
var pontos=0;

var iCenario;
var iPersonagem;
var iTexto;
var iButton;
var iMultPersonagens;
var txtOpcaoA;
var txtOpcaoB;
var txtOpcaoC;
var img;
var img2;
var comportamento;
var estilo;
var btnsAtivo = false;
//var c;

//alert("ok");
window.onload = function(){
    desabilitarAll();
};

function gamePlay(){
    if(indice==0){indice++;}
    for(c=0;c<=matHistoria.length;c++){
        if(indice==matHistoria[c][0]){
            comportamento = matHistoria[c][4];
            if(comportamento == null){
                fimDeJogo();
                return 0;
            }// fim de jogo
            else{
				switch(comportamento){
                    case 0://rota padrão
                        carregamentoPadrão();
                        iPersonagem = matHistoria[c][2];
                        selecionarPersonagem(iPersonagem);
                        document.getElementById('img-personagem-1').style.display = '';  
						document.getElementById("img-personagem-1").src = img2;
                        indice++;
                        break;
                    case 1://retornar rota padrão
                        indice = matHistoria[c][3];
                        gamePlay(indice);
                        break;
                    case 2: //Abrir opições (ativar botões)
                        iButton = matHistoria[c][3];
                        selecionarBtn(iButton);
                        break;
                    case 3: //multiplos personagens
                        carregamentoPadrão();
                        iMultPersonagens = matHistoria[c][2];
                        selecionalPersonagens();
                        indice++;
                        break;
					default: 
                    alert("Erro fatal, por favor comunique ao suporte");
                }//switch - comportamento do sistema
            }//else - normal
				return 0;
        }//if - selecionar ponto do indice
    }//for - percorrer array da História
}//Function PRINCIPAL

function carregamentoPadrão(){
    desabilitarAll();
    //código sem erro, porem não funciona
    iCenario = matHistoria[c][1];
    selecionarCenario(iCenario);
    let cenario = document.getElementById("cenario");
    cenario.style.background.src = img;
    cenario.style.background.url = img;
    iTexto = matHistoria[c][3];
    formatarTexto(iTexto);
}

function desabilitarAll(){
    document.getElementById('btn-b').style.display = 'none';
    document.getElementById('btn-c').style.display = 'none';
    document.getElementById('img-personagem-5').style.display = 'none';
    document.getElementById('img-personagem-4').style.display = 'none';
    document.getElementById('img-personagem-3').style.display = 'none';
    document.getElementById('img-personagem-2').style.display = 'none';
    document.getElementById('img-personagem-1').style.display = 'none';
    document.getElementById('tela-narrativa').style.display = 'none';
    document.getElementById('bubble').style.display = 'none';
}

function formatarTexto(iTexto){
	for(let i=0;i<=matTexto.length;i++){
        if(iTexto==matTexto[i][0]){
			txtOpcaoA = matTexto[i][1];
            estilo = matTexto[i][2];
            switch(estilo){
				case 0: //padrão
                    document.getElementById('btn-a').innerText = txtOpcaoA;
					break;
				case 1: //narração
                    document.getElementById('tela-narrativa').style.display = '';
                    document.getElementById('tela-narrativa').innerText = txtOpcaoA;
					document.getElementById('btn-a').innerText = "(Continuar...)";
					break;
                case 2://dialogo
                    document.getElementById('bubble').style.display = '';
					document.getElementById('bubble').innerText = txtOpcaoA;
					document.getElementById('btn-a').innerText = "(Continuar...)";
			}
			break;
		}//formato
	}//for matTexto
}//definir exibição de texto

function selecionarCenario(iCenario){
    for(let i=0;i<=matCenarios.length;i++){
        if(iCenario==matCenarios[i][0]){
            img = matCenarios[i][1];
            break;
        }
    }
}//Selecionar cenario na matCenario

function selecionarPersonagem(iPersonagem){
    for(let i=0;i<=matPersonagens.length;i++){
        if(matPersonagens[i][0]==iPersonagem){
            img2 = matPersonagens[i][1];
            break;
        }
    }
}//Selecionar personagem na matPersonagens

function selecionarBtn(iButton){
    for(let i=0;i<=matBtnTexto.length;i++){
        if(iButton == matBtnTexto[i][0]){
            txtOpcaoA = matBtnTexto[i][1];
			document.getElementById('btn-a').innerText = txtOpcaoA;
            //txtOpcaoB = matOpcaoTexto[i][2];
            txtOpcaoB = "não";
            document.getElementById('btn-b').style.display = '';
            document.getElementById('btn-b').innerText = txtOpcaoB;	
            txtOpcaoC==null;
            if(txtOpcaoC!=null){
                txtOpcaoC = matOpcaoTexto[i][3];
                document.getElementById('btn-c').style.display ='';
				document.getElementById('btn-c').innerText = "Talvez";
			}
            btnsAtivo = true;
            return 0;
        }
    }
}//ativar botões

function selecionalPersonagens(){
    for(let i=0;i<=matMultPersonagens.length;i++){
        if(iMultPersonagens == matMultPersonagens[i][0]){
            iPersonagem = matMultPersonagens[i][1];
            habilitarPersonagem1(iPersonagem);
            iPersonagem = matMultPersonagens[i][2];
            habilitarPersonagem2(iPersonagem);
            iPersonagem = matMultPersonagens[i][3];
            habilitarPersonagem3(iPersonagem);
            iPersonagem = matMultPersonagens[i][4];
            habilitarPersonagem4(iPersonagem);
            iPersonagem = matMultPersonagens[i][5];
            habilitarPersonagem5(iPersonagem);
            break;
        }//if - multPersonagens
    }//for - percorrar matMultPersonagens
}//selecionar multiplos personagens

function habilitarPersonagem1(){
    if(iPersonagem!=null){
        selecionarPersonagem(iPersonagem);
        document.getElementById('img-personagem-1').style.display = '';  
        document.getElementById("img-personagem-1").src = img2;
    }//personagem 1
}
function habilitarPersonagem2(){
    if(iPersonagem!=null){
        selecionarPersonagem(iPersonagem);
        document.getElementById('img-personagem-2').style.display = '';  
        document.getElementById("img-personagem-2").src = img2;
    }//personagem 2
}

function habilitarPersonagem3(){
    if(iPersonagem!=null){
        selecionarPersonagem(iPersonagem);
        document.getElementById('img-personagem-3').style.display = '';  
        document.getElementById("img-personagem-3").src = img2;
    }//personagem 3
}

function habilitarPersonagem4(){
    if(iPersonagem!=null){
        selecionarPersonagem(iPersonagem);
        document.getElementById('img-personagem-4').style.display = '';  
        document.getElementById("img-personagem-4").src = img2;
    }//personagem 4
}

function habilitarPersonagem5(){
    if(iPersonagem!=null){
        selecionarPersonagem(iPersonagem);
        document.getElementById('img-personagem-5').style.display = '';  
        document.getElementById("img-personagem-5").src = img2;
    }//personagem 1
}
    
function recebeBtn(alt){
    btnsAtivo = false;
    selecionarRota(iButton,alt);
    calcularAfeto(iButton,alt);
    gamePlay(indice);
}

function selecionarRota(iButton,alt){
    for(let i=0;i<=matRotaPonteiro.length;i++){
        if(matRotaPonteiro[i][0]==iButton){
            indice = matRotaPonteiro[i][alt];
            return 0;
        }
    }
}//mudar indice de rota

function calcularAfeto(iButton,alt){
    for(let i=0;i<=matPontosAfeto.length;i++){
        if(matPontosAfeto[i][0]==iButton){

            pontos = pontos + matPontosAfeto[i][alt];
            return 0;
        }
    }
}//fazer calculo de afinidade (afeto)

function fimDeJogo(){
    alert("Fim de Jogo!");
    desabilitarAll();
    document.getElementById('btn-a').innerText = "Start";
    indice = 0;
}//encerrar jogo e zerar

function play(alt){
    if(btnsAtivo){
        recebeBtn(alt);
    }
    else{
        gamePlay();
    }
}

function btnOpcaoA() {play(1);}
function btnOpcaoB() {play(2);}
function btnOpcaoC() {play(3);}