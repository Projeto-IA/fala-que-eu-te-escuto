(function () {


    var speakBtn = document.querySelector('#speakbt');
    var resultSpeaker = document.querySelector('#resultSpeak');
    
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

        var myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';


        speakBtn.addEventListener('click', function () {

            try {

                myRecognition.start();

                resultSpeaker.innerHTML = "Estou te ouvindo!";

            } catch (erro) {
                alert('erro:' + erro.message);
            }

        }, false);

        myRecognition.addEventListener('result', function (evt) {

            var resultSpeak = evt.results[0][0].transcript;

            console.log(resultSpeak);

            resultSpeaker.innerHTML = resultSpeak;

            switch (resultSpeak.toLowerCase()) {
                case 'clarear':
                    document.body.style.backgroundColor = '#88BFCD';
                    break;
                case 'escurecer':
                    document.body.style.backgroundColor = '#255784';
                    break;
            }

            if (resultSpeak.match(/buscar por/)) {

                resultSpeaker.innerHTML = 'Redirecionando...';
                
                setTimeout(function(){
                    
                    var resultado = resultSpeak.split('buscar por');
                    window.open ('https://www.google.com.br/search?q=' + resultado[1]);

                },2000);
            }

        }, false);

        myRecognition.addEventListener('result', function (evt) {

            var resultSpeak = evt.results[0][0].transcript;

            console.log(resultSpeak);

            resultSpeaker.innerHTML = resultSpeak;

            switch (resultSpeak.toLowerCase()) {
                case 'clarear':
                    document.body.style.backgroundColor = '#88BFCD';
                    break;
                case 'escurecer':
                    document.body.style.backgroundColor = '#255784';
                    break;
            }

            if (resultSpeak.match(/assistir/)) {

                resultSpeaker.innerHTML = 'Redirecionando...';
                
                setTimeout(function(){
                    
                    var resultado2 = resultSpeak.split('assistir');
                    window.open ('https://www.youtube.com/results?search_query=' + resultado2[1]);

                },2000);
            }

        }, false);

        myRecognition.addEventListener('result', function (evt) {

            var resultSpeak = evt.results[0][0].transcript;

            console.log(resultSpeak);

            resultSpeaker.innerHTML = resultSpeak;

            switch (resultSpeak.toLowerCase()) {
                case 'clarear':
                    document.body.style.backgroundColor = '#88BFCD';
                    break;
                case 'escurecer':
                    document.body.style.backgroundColor = '#255784';
                    break;
            }

            if (resultSpeak.match(/comparar preço/)) {

                resultSpeaker.innerHTML = 'Redirecionando...';
                
                setTimeout(function(){
                    
                    var resultado3 = resultSpeak.split('comparar preço');
                    window.open ('https://www.buscape.com.br/search?q=' + resultado3[1]);

                },2000);
            }

        }, false);

        myRecognition.addEventListener('result', function (evt) {

            var resultSpeak = evt.results[0][0].transcript;

            console.log(resultSpeak);

            resultSpeaker.innerHTML = resultSpeak;

            switch (resultSpeak.toLowerCase()) {
                case 'clarear':
                    document.body.style.backgroundColor = '#88BFCD';
                    break;
                case 'escurecer':
                    document.body.style.backgroundColor = '#255784';
                    break;
            }
            // Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;
         
            if (resultSpeak.match(/data de hoje/)) {
                resultSpeaker.innerHTML = 'Hoje é ' + str_data + ' às ' + str_hora;
            }

        }, false);


        myRecognition.addEventListener('error', function (evt) {

            resultSpeaker.innerHTML = 'Se você disse alguma coisa, não ouvi muito bem!';

        }, false);

    } else {
        resultSpeaker.innerHTML = 'Seu navegador não suporta tanta tecnoligia!';
    }

})();
