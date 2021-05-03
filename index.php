<?php
    // Código da API em PHP

    
?>

<!Doctype HTML>
<html lang ="pt-BR">
<head>

    <!-- Essa é a única página que terá o template DIFERENTE das outras -->

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
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <!-- Stylesheet modal -->
    <link rel="stylesheet" href="css/modal.css">
</head>
<body>

    <!-- A intenção é ter cada section pra cada "quadro" do figma, por enquanto vai ter só o header com o menu, depois edito-->
    <section>
        <header>
            <nav>
                <ul>
                    <li><a onclick="initModal('modal-cr')" style="cursor: pointer;">Cadastre-se</a></li>
                    <li><a onclick="initModal('modal-c')" style="cursor: pointer;">Entrar</a></li>
                </ul>
            </nav>
        </header>
    </section>
    
    <div class="modal-login modal-container" id="modal-c">
        <div class="modal-all">
            <button onclick="endModal('modal-c')" class="close-btn" id="close-login">X</button>
            <h1>Faça login e divirta-se em Soremia!</h1>
            <form id="login">
                <input type="email" id="email-login" placeholder="E-mail" required=""><br>
                <input type="password" id="senha-login" placeholder="Senha" required=""><br>
                <input type="submit" value="Entrar">
            </form>
            <a onclick="endModal('modal-c'); initModal('modal-cr')">Clique aqui para se cadastrar</a>
        </div>
    </div>
    <div class="modal-register modal-container" id="modal-cr">
        <div class="modal-all">
            <button onclick="endModal('modal-cr')" class="close-btn" id="close-login">X</button>
            <h1>Registre-se para jogar!</h1>
            <form id="login">
                <input type="text" id="nickname" placeholder="Nickname" required=""><br>
                <input type="email" id="email-register" placeholder="E-mail" required=""><br>
                <input type="password" id="senha-register" placeholder="Senha" required=""><br>
                <input type="submit" value="Entrar">
            </form>
            <a>Clique aqui para fazer login</a>
        </div>
    </div>

    <!-- Adicionar scripts AQUI  -->
    <script src="js/site/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <!-- Scripts da modal e consumo de API -->
    <script src="js/site/util.js"></script>

</body>
</html> 