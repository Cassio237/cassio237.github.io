function fuja(){
            var botaoNao = document.getElementById("nao")

            var larguraJanela = window.innerWidth;
            var alturaJanela = window.innerHeight;

            var maxX = larguraJanela - botaoNao.offsetWidth;
            var maxY = alturaJanela - botaoNao.offsetHeight;

            var aleatorioX = Math.floor(Math.random() * maxX);
            var aleatorioY = Math.floor(Math.random() * maxY);

            botaoNao.style.left = aleatorioX + "px";
            botaoNao.style.top = aleatorioY + "px";
}

function mostrarPainel(id) {
            var audio = document.getElementById('myAudio');
            audio.play(); // Inicia a reprodução do áudio
            audio.muted = false; // Desmuta o áudio para que seja audível

            document.getElementById('painel1').style.display = 'none';
            document.getElementById('painel2').style.display = 'none';
            document.getElementById(id).style.display = 'block';
}