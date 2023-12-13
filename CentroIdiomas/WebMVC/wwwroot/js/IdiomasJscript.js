
//empieza el codigo javascript
$(document).ready(function () {

    $('#programa').prop('selectedIndex', 0);
    $('#intensidad').prop('selectedIndex', 0);
    $('#intensidad').prop("disabled", true);

    //esto sucede solo cuando se cambia el idioma
    //o programa seleccionado
    $('#programa').change(function () {
        //desactivamos la seleccion generica
        $('#seleccionDisable').prop("disabled", true);

        $('#programa option:selected').each(function () {
            $('#btnBCurso').trigger('click');
        });
    });

    //comprobamos esperando un tiempo a que se cargue los datos
    //en la tablaCurso
    //para saber si se debe habilitar la seleccion de intensidad
    $('#btnBCurso').click(function () {
        setTimeout(function () {
            if ($('#tablaCurso').length) {
                $('#intensidad').removeAttr("disabled");
            } else {
                $('#intensidad').prop("disabled", true);
            }
        }, 100);
    });

    $('#intensidad').change(function () {
        $('#seleccionDisable2').prop('disabled', true);

        $('#intensidad option:selected').each(function () {
            var horas = parseInt($('#nHoras').val());

            var finalCalculo = function (horas) {

                var intensidad = $('#intensidad option:selected').val();
                let resta;

                var actual_fecha = new Date();

                if (intensidad == "BAJO") { resta = 1; }
                else if (intensidad == "MEDIO") { resta = 2; }
                else if (intensidad == "ALTO") { resta = 3; }
                else if (intensidad == "INTENSIVO") { resta = 4; }

                horas = horas * 0.25;




                do {

                    actual_fecha = actual_fecha.setDate(actual_fecha.getDate() + 1)


                } while (horas != 0);

            }();
            $('#lblfecha').val();
        });
    });


    function colocarfecha() {



    }
});



