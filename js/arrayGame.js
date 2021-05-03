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

var matBaloesDeFala = [
	[1, "M202,43 q-157,-6 -144,79 q14,58 129,55 q-23,48.5 -46,47 q36,4.5 72,-49 q235,10 232,-67 q10,-70 -131,-65 Z"],//Balão grande
	[2, "M92,43 q-137,-7 -140,79 q0,58 99,55 q-33,58.5 -56,47 q36,12 72,-49 q95,10 100,-67 q1,-60 -70,-65 Z"],//balão médio
	[3, "M152,13 q-87,-2 -70,79 q20,45 69,55 q-3,48.5 -30,47 q25,12 46,-49 q55,-10 55,-67 q0,-50 -60,-63 Z"]//Balão pequeno
];
//[índice, atributo da forma do balão]

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
	[11,1,3,11,0],
	[12,1,0,1,2],
	[13,1,0,12,0],
	[14,1,0,16,1],
	[15,1,0,13,0],
	[16,1,0,14,0],
	[17,null,null,null,null]
];
    //[indice, cenario, personagem, texto, comportamento]
	
var matTexto = [
	[1,"Bem vindo a Soremia.",1, 0],
	[2,"Obrigada! SKKSAOSAKASOKOSAOKASKOSAKOSAKOASKOASKOSAOSAASK OLHA SÓ ESSE TESTE", 2, 1],
	[3,"Oh! As personagens!",0, 0],
	[4,"Aqui está Aelyn.",1, 0],
	[5,"Diga ola para Aelyn!",1, 0],
	[6,"Olá Alelyn!",0, 0],
	[7,"Esta Yerin.",1, 0],
	[8,"Oi Yerin",0, 0],
	[9,"E esta é Cherry",1, 0],
	[10,"Como você é fofa!",0, 0],
	[11,"Obrigada!",2, 3],
	[12,"Você está gostando?",1, 0],
	[13,"Que bom!",1, 0],
	[14,"Que pena!",1, 0],
	[15,"Obrigado pelo teste, até mais!",1, 0]
];
	//[indice, texto, estilo, balao]

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

	
	