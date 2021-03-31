
<!-- Esse é o arquivo que vai conter o <head></head> com todos os arquivos CSS e tags SEO necessárias, junto com o
menu que será usado na maioria das páginas. Esse include contém além do head, o cabeçalho e o menu das páginas -->

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