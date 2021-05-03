<!-- Esse é o arquivo do menu geral para quase todas as páginas. Tags SEO, cabeçalho, links/css e menus residem aqui.  -->

<!Doctype HTML>
<html lang ="pt-BR">
<head>

    <!-- Título do site -->
    <title>Projeto Soremia</title>
    
   
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


</head>
<body>

    <!-- Cabeçalho  -->
    <header class="header-logo">
        <!-- Logo -->
        <img src="../imgs/logo-word.png" alt="Projeto Soremia" height="45px">
        <button id="show" class="menu-button show" onclick="showMenu();"><i id="show-icon" class="fas fa-bars fa-2x"></i></button>
    </header>

    <!-- Container geral -->
    <div class="container-main">
      <div class="menu-open">
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
</div>