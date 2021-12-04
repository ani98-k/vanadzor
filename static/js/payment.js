function copy() {
      var copyText = document.getElementById("swift");
      $("#swift").tooltip('hide')
        .attr('data-original-title', 'Copied')
        .tooltip('show');
      var textArea = document.createElement("textarea");
      textArea.value = copyText.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
  }

  function onChangePlaceholder() {
    if ($("#legal").is(':checked')) {
      $('#nameLabel').html(companyName)
    } else {
      $('#nameLabel').html(fullName)
    }
  }

  function changeCurrency(currency, symbol){

      const html = `<li id="AMD" onclick="changeCurrency('AMD', '֏')">֏</li>
                      <li id="RUB" onclick="changeCurrency('RUB', '₽')">₽</li>
                      <li id="USD" onclick="changeCurrency('USD', '$')">$</li>
                      <li id="EUR" onclick="changeCurrency('EUR', '€')">€</li>`

      $(".submenu").html(html)
      $(`#${currency}`).remove();
      $("#default_currency").html(symbol)

      $.ajax({
          type: 'GET',
          url: paymentUrl,
          data: {currency},
          dataType: 'json',
          success: function(response){
              $("#bank_account").html(response['bank_account'])
          },
          error: function(rs, e){
              console.log(rs)
          }
      });
  }

  function onSubmit() {
    if (!$("#term")[0].checked) {
      $("#term_error").html("This field is required.");
      return false
    }
    return true
  }

function animateLabal() {
    $(".form-control").each(function() {
        if ($(this).val().replace(/\s/g, '') == '') {
          $(this).parent().removeClass("label-animate");
        } else {
           $(this).parent().addClass("label-animate");
        }
    });
}

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    animateLabal()

  $(".form-control").click(function() {
      animateLabal()
      $(this).parent().addClass("label-animate");
  });

  $(window).click(function() {
    if (!$(event.target).is('.form-control')) {
      animateLabal()
    }
  });
});