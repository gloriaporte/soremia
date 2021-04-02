<?php include('../include/menu.php');?>

            <main>
                <!-- tela de jogo -->
                <section class="game-container">
                
                    <!-- narração -->
                    <div class="story-container" id="tela-narrativa">
                        <span id="txt-narrativo" class="story"></span>
                    </div>

                    <!-- botões -->
                    <div class="buttons-container">
                        <button id="btn-a" onclick="btnOpcaoA()"><span class="txt-btn-a">Start</span></button>
                        <button id="btn-b" onclick="btnOpcaoB()"><span class="txt-btn-b"></span></button>
                        <button id="btn-c" onclick="btnOpcaoC()"><span class="txt-btn-c"></span></button>
                    </div>

                    <!-- falas -->
                    <div class="bubble-container">
                        <div class="bubble-box" id="bubble">
                            <span id="txt-balao"></p>
                        </div>
                    </div>

                    <!-- personagem -->
                    <div class="char-container">
                        <img src="" id="img-personagem-1" class="char">
                        <img src="" id="img-personagem-2" class="char">
                        <img src="" id="img-personagem-3" class="char">
                        <img src="" id="img-personagem-4" class="char">
                        <img src="" id="img-personagem-5" class="char">
                    </div>
                    <!-- cenário -->
                    <div  id="cenario" class="scenery">
                        <img src="../teste/cenario.png" alt="">
                    </div>

                </section>
            </main>
        </div>
  <?php  include('../include/rodape.php'); ?>
    <script type="text/javascript" src="../js/funcPlay.js"></script>
    <script type="text/javascript" src="../js/arrayGame.js"></script>
</body>
</html> 
