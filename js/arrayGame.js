/***********************
***Arrays Game***
* Versão: 1.0
* Autor: Samira - 2020
* Coral Otome Gama
***********************/
/*
* Sobre:
* Arrays necessárias para o funcionamento do jogo;
* Matizes:
* matHistoria[indice, cenario, personagem, texto, comportamento]
* recebe o esqueloto do capitulo (matriz vazia, recebe dados por função)
* matTexto[indice, texto, estilo]
* texto dos dialogos (matriz vazia, recebe dados por função)
* matBtnTexto[indice, textoA, textoB, textoC] 
* textos dos botões de opção (matriz vazia, recebe dados por função)
* matPontosAfeto[indice, opcaoA, opcaoB, opcaoC]
* matriz com pontos de afeto de cada opção[indice, opcaoA, opcaoB, opcaoC]
* matRotaPonteiro[indice, opcaoA, opcaoB, opcaoC]
* matriz que indica mudança de rota alternativa[indice, opcaoA, opcaoB, opcaoC]
* matCenario[indice, cenario]
* Matriz com os links de todos os cenários
* matPersonagens[indice, personagem]
* funções para preenchimento das arrays serão de acordo com capitulo
*/
var matCenario = [];
    //[indice, cenario]
	
var matPersonagens = [];
    //[indice, personagem]
	
var matHistoria = [];
    //[indice, cenario, personagem, texto, comportamento]
	
var matTexto = [];
	//[indice, texto, estilo]

var matBtnTexto = [];
	//[indice, textoA, textoB, textoC]

var matPontosAfeto = [];
	//[indice, opcaoA, opcaoB, opcaoC]

var matRotaPonteiro = [];
	//[indice, opcaoA, opcaoB, opcaoC]

	
	