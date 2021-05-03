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
                        <button id="btn-a" class="btns" onclick="btnOpcaoA()"><span class="txt-btn-a">Start</span></button>
                        <button id="btn-b" class="btns" onclick="btnOpcaoB()"><span class="txt-btn-b"></span></button>
                        <button id="btn-c" class="btns" onclick="btnOpcaoC()"><span class="txt-btn-c"></span></button>
                    </div>
                    
                    <!-- container das falas e do balão -->
                    <div class="bubble-container" id="bubblecontainer">
                        
                        <!-- falas -->
                        <div class="bubble-box" id="falas">
                            <span id="txt-balao"></span>
                        </div>

                        <!-- Desenho do balão de fala -->
                        <svg width="600" height="300">
                            <!-- O path é o desenho em forma de bézier -->
                            <path id="balao" class="balao" d="" style="fill:white;stroke:black;stroke-width:1;fill-opacity:0.6;stroke-opacity:1"/> 
                        </svg>
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
