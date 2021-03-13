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

var matCenario = [
	[1,"https://i.ibb.co/d5qbSm4/Quarto-Aelyn.png"],
	[2,""],
	[3,""],
	[4,""]
];
    //[indice, cenario]
	
var matPersonagens = [
	[0,""],
	[1,"https://i.ibb.co/m5Gxz2R/Aelyn-20210221163022.png"],
	[2,"https://i.ibb.co/bzLb7GS/Yerin-20210302181153.png"],
	[3,"https://i.ibb.co/yY9g1WR/Cherry-29.png"]
];
    //[indice, personagem]
	
var matHistoria = [
	[1,1,0,1,0],
	[2,1,1,2,3],
	[3,1,1,3,0],
	[4,1,1,4,0],
	[5,1,1,5,0],
	[6,1,2,6,0],
	[7,1,2,7,0],
	[8,1,3,8,0],
	[9,1,3,9,0],
	[10,1,3,10,0],
	[11,1,0,11,0],
	[12,1,0,1,2],
	[13,1,0,12,0],
	[14,1,0,16,1],
	[15,1,0,13,0],
	[16,1,0,14,0],
	[17,null,null,null,null]
];
    //[indice, cenario, personagem, texto, comportamento]
	
var matTexto = [
	[1,"Bem vindo a Soremia.",1],
	[2,"Oh! As personagens!",0],
	[3,"Aqui está Aelyn.",1],
	[4,"Diga ola para Aelyn!",1],
	[5,"Olá Alelyn!",0],
	[6,"Esta Yerin.",1],
	[7,"Oi Yerin",0],
	[8,"E esta é Cherry",1],
	[9,"Como você é fota!",0],
	[10,"Obrigada!",2],
	[11,"Você está gostando?",1],
	[12,"Que bom!",1],
	[13,"Que pena!",1],
	[14,"Obrigado pelo teste, até mais!",1]
];
	//[indice, texto, estilo]

var matBtnTexto = [
	[1,"sim","não",null],
	[2,"","",""]
];
	//[indice, textoA, textoB, textoC]

var matRotaPonteiro = [
	[1,13,15,null],
	[2,null,null,null]
];
	//[indice, opcaoA, opcaoB, opcaoC]

matMultPersonagens = [
	[1,3,2,1,null,null],
	[2,null,null,null,null,null]
];
	//[indice, per1, per2, per3, per4, per5]

var matPontosAfeto = [
	[1,2,0,null],
	[2,null,null,null]
];
	//[indice, opcaoA, opcaoB, opcaoC]

	
	