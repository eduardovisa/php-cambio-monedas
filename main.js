$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    $.ajax({
      data: data,
      url: 'main.php',
      type: 'post',
      dataType: 'json',
    })
      .done(function (response) {
        $('.miles').html(response[0]);
        $('.centenas').html(response[1]);
        $('.decenas').html(response[2]);
        $('.unidades').html(response[3]);
      })
      .fail(function (response) {
        console.log(response);
        $('span').html('Falso');
      })
      .always(function () {
        $('.fa').hide();
      });
  });
});
