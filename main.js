$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    $.ajax({
      data: data,
      url: 'main.php',
      type: 'post',
      dataType: 'json',
      beforeSend: function () {
        $('.fa').css('display', 'inline');
      },
    })
      .done(function (response) {
        $('.miles').html(response[0]);
        $('.centenas').html(response[1]);
        $('.decenas').html(response[2]);
        $('.unidades').html(response[3]);
      })
      .fail(function (response) {
        // console.log(response);
      })
      .always(function () {
        $('.fa').hide();
      });
  });
});
