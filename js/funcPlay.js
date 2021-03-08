/***********************
***Funcitions Play***
* Versão: 1.0
* Autor: Samira - 2020
* Coral Otome Gama
***********************/

/*
* Sobre:
* Funcões padrões do jogo (usada em todos capitulos)
* Observações:
* variaveis a declarar: indice, afinidades
* id do botão está no texto
* indice de mudança de rota no texto
* !!!CÓDIGO NÃO TESTADO!!!
* pontos de afeto apenas recebe e não faz cauculo
*/

var iCenario;
var iPersonagem;
var iTexto;
var iButton;
var txtOpcaoA;
var txtOpcaoB;
var txtOpcaoC;
var img;
var img2;
var comportamento;
var estilo;
var btnsAtivo = false;
var pontos;

function gamePlay(){
    for(i=0;i<matHistoria.length;i++){
        if(indice==matHistoria[i][0]){
			comportamento = matHistoria[i][4];
			if(comportamento == null){
                fimDeJogo();
                return 0;
            }// fim de jogo
			else{
				switch(comportamento){
					case 0://rota padrão
						indice++;
						iCenario = matHistoria[i][1];
						iPersonagem = matHistoria[i][2];
						iTexto = matHistoria[i][3];
						selecionarCenario(iCenario);
						selecionarPersonagem(iPersonagem);
						formatarTexto(iTexto);
						document.getElementById('btnB').style.display = 'none';
						document.getElementById('btnC').style.display = 'none';
						document.getElementById("cenario").src = img;
							if(estilo==2){continue;}
							else{document.getElementById("personagem").src = img2;}
						break;
					case 1://retornar rota padrão
						indice = matHistoria[i][3];
						gamePlay(indice);
						break;
					//Abrir opições (ativar botões)
					case 2: //rota simples
						iButton = matHistoria[i][3];
						selecionarBtn(iButton);
						break;
					default: 
						alert("Erro fatal, por favor comunique ao suporte");
                }
				return 0;
            }//switch - comportamento do sistema
        }//if - selecionar ponto do indice
    }//for - percorrer array da História
}//Function PRINCIPAL

function formatarTexto(iTexto){
	for(i=0;i<matTexto.length;i++){
        if(iTexto==matTexto[i][0]){
			txtOpcaoA = matTexto[i][1];
			estilo = matTexto[i][2];
			switch(){
				case 0: //padrão
					document.getElementById('btnA').innerText = txtOpcaoA;
					break;
				case 1: //narração
					document.getElementById('caixa').innerText = txtOpcaoA;
					document.getElementById('btnA').innerText = "(Continuar...)";
					break;
				case 2://dialogo
					document.getElementById('balao').innerText = txtOpcaoA;
					document.getElementById('btnA').innerText = "(Continuar...)";
			}
			break;
		}//formato
	}//for matTexto
}//definir exibição de texto

function selecionarCenario(iCenario){
    for(i=0;i<matCenarios.length;i++){
        if(matCenarios[i][0]==iCenario){
            img = matCenarios[i][1];
            break;
        }
    }
}//Selecionar cenario na matCenario

function selecionarPersonagem(iPersonagem){
    for(i=0;i<matPersonagens.length;i++){
        if(matPersonagens[i][0]==iPersonagem){
            img2 = matPersonagens[i][1];
            break;
        }
    }
}//Selecionar personagem na matPersonagens

function fimDeJogo(){
    alert("Fim de Jogo!");
    document.getElementById('34875126').innerText = "Start";
    document.getElementById("63487154").src = "";
    document.getElementById("36294781").src = "";
}//encerrar jogo e zerar

function selecionarBtn(iButton){
    for(i=0;i<matBtnTexto.length;i++){
        if(iButton == matBtnTexto[i][0]){
			txtOpcaoA = matBtnTexto[i][1];
			document.getElementById('btnA').innerText = txtOpcaoA;
            txtOpcaoB = matOpcaoTexto[i][2];
            document.getElementById('btnB').style.display = '';
            document.getElementById('btnB').innerText = txtOpcaoB;
			txtOpcaoC = matOpcaoTexto[i][3];
            if(txtOpcaoC!=null){
				document.getElementById('btnC').style.display = '';
				document.getElementById('btnC').innerText = txtOpcaoC;
			}
            btnsAtivo = true;
            return 0;
        }
    }
}//ativar botões

function recebeBtn(alt){
    selecionarRota(iButton,alt);
    calcularAfeto(iButton,alt);
    gamePlay(indice);
}

function selecionarRota(iButton,alt){
    for(i=0;i<matRotaPonteiro.length;i++){
        if(matRotaPonteiro[i][0]==iButton){
            indice = matRotaPonteiro[i][alt];
            return 0;
        }
    }
}//mudar indice de rota

function calcularAfeto(iButton,alt){
    for(i=0;i<matPontosAfeto.length;i++){
        if(matPontosAfeto[i][0]==iButton){
            pontos = matPont[i][alt];
            return 0;
        }
    }
}//fazer calculo de afinidade (afeto)

function play(alt){
            if(btnsAtivo){
                recebeBtn(alt);
            }
            else{
				gamePlay();
			}
        }
		
function btnOpcaoA() {play(1);};
function btnOpcaoB() {play(2);};
function btnOpcaoC() {play(3);};