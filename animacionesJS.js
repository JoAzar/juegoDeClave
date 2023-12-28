document.addEventListener('DOMContentLoaded', function() {

    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var input3 = document.getElementById('input3');

    var divImagen = document.querySelector('.divImagen');

    var inputs = ['', '', ''];

    input1.addEventListener('change', esVerdadero);
    input2.addEventListener('change', esVerdadero);
    input3.addEventListener('change', esVerdadero);

    function esVerdadero() {

        var valor1 = parseInt(input1.value);
        var valor2 = parseInt(input2.value);
        var valor3 = parseInt(input3.value);

        if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
            return;

        }
        inputs[0] = valor1;
        inputs[1] = valor2;
        inputs[2] = valor3;
        
        if(inputs[0] == 0 && inputs[1] == 4 && inputs[2] == 2){
            input1.value = "00";
                input2.value = "00";
                input3.value = "00";
                divImagen.classList.add('abierto');
            setTimeout(function() {
                input1.value = "";
                input2.value = "";
                input3.value = "";
                divImagen.classList.remove('abierto');
            },5000);
            
        }else{
            var cadena1 = valor1.toString();
            input1.value = "77";
            input2.value = "77";
            input3.value = "77";
            setTimeout(function() {
                input1.value = "";
                input2.value = "";
                input3.value = "";
            },5000);
        }
    }
});