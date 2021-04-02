<<<<<<< HEAD
<!-- Esse é o arquivo do menu geral para quase todas as páginas. Tags SEO, cabeçalho, links/css e menus residem aqui.  -->
=======

<!-- Esse é o arquivo que vai conter o <head></head> com todos os arquivos CSS e tags SEO necessárias, junto com o
menu que será usado na maioria das páginas. Esse include contém além do head, o cabeçalho e o menu das páginas -->
>>>>>>> 2355a9f2b07a2832d9717076f4219f047bda8fd4

<!Doctype HTML>
<html lang ="pt-BR">
<head>

<<<<<<< HEAD
    <!-- Título do site -->
    <title>Projeto Soremia</title>
    
   
=======

    <!-- Título do site -->
    <title>Projeto Soremia</title>

>>>>>>> 2355a9f2b07a2832d9717076f4219f047bda8fd4
    <!-- META TAGS for SEO -> Search Engine, elas servem para que facilite a busca do nosso site. Futuramente adicionarei
    mais meta tags.  -->
    <meta charset="UTF-8">
    <meta http-equiv="content-language" content="pt-BR">
    <meta name="author" content="Coral Otome Game">
    <meta name="description" content="Em um mundo onde relações entre raças diferentes é visto como um ato criminoso, você conseguirá manter seu grande amor em segredo e ao mesmo tempo demonstrar seu valor ao seu pai? Conheça Soremia, seu novo jogo de romance predileto!">
    <meta name="keywords" content="soremia, otome, game, coral">
    <meta name=”viewport” content="width=device-width, initial-scale=1.0">

    <!-- Adicionar folhas de estilo/css AQUI -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
<<<<<<< HEAD


</head>
<body>

    <!-- Cabeçalho  -->
    <header class="header-logo">
        <!-- Logo -->
        <img src="../imgs/logov2.png" alt="Projeto Soremia" height="45px">
    </header>

    <!-- Container geral -->
    <div class="container-main">
        <!-- Botões pra abrir/fechar  menu -->
        <div class="menu-buttons">
            <button id="open" class="menu-button open" onclick="openMenu();"><i id="open-icon" class="fas fa-bars fa-2x"></i></button>
        </div>
        <!-- Menu container -->
        <nav id="menu">
            <div class="menu-header">
              
                <!-- Infos do usuário -->
                <div class="user-info">
                    <span class="user-name">Princesinha Soraya</span>
                    <span class="user-lvl">Nível 14</span>
                </div>
                  <!-- Botão p fechar -->
                  <div class="button-close-content">
                    <button id="close" class="menu-button close" onclick="closeMenu();"><i id="close-icon" class="fas fa-times fa-2x"></i></button>
                </div>
                </div>
                <!-- Menu links -->
                <ul>
                    <li><a href="home.php">Início</a></li>
                    <li><a href="game.php">Jogar</a></li>
                    <li><a href="chapters.php">Capítulos</a></li>
                    <li><a href="affinity.php">Afinidade</a></li>
                    <li><a href="characters.php">Personagens</a></li>
                    <li><a href="gallery.php">Galeria</a></li>
                    <li><a href="archives.php">Arquivos</a></li>
                    <li><a href="logout.html">Sair</a></li>
                </ul>
        </nav>
=======
</head>
<body>

    <!-- Cabeçalho -->
        <header>
           <h1>Projeto Soremia</h1>
        </header>
        <div class="container-main">
            <div>
                <!-- Botões para abrir e fechar menu -->
                <button onclick="closeMenu();">Fechar</button>
                    <button onclick="openMenu();">Abrir</button>
                <div >
                    <!-- Menu collapse -->
                    <nav id="menu">
                        <span>Nome de  usuário</span>
                    <span>Nível/Episódio</span>
                        <!-- A ideia do menu é ter o nome do usuário, nível/ep atual e logout--> 
                        <ul>
                            <li><a href="main.php">Início</a></li>
                            <li><a href="game.php">Jogar</a></li>
                            <li><a href="chapters.php">Capítulos</a></li>
                            <li><a href="characters.php">Personagens</a></li>
                            <li><a href="gallery.php">Galeria</a></li>
                            <li><a href="logout.php">Sair</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
>>>>>>> 2355a9f2b07a2832d9717076f4219f047bda8fd4
