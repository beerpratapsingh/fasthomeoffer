$(document).ready(function () {  

  $('#submitBtn').on('click', function () {    
    event.preventDefault();    
    
    var address = $('#address').val();
    var postalCode = $('#postal_code').val();
    var city = $('#city').val();
    var state = $('#state').length;

    $(".error").remove();

    if (address.length < 1) {
      $('#address').after("<span class='error'>Please enter street address</span>");;      
    }
    if (postalCode.length < 6) {
      $('#postal_code').after("<span class='error'>Please enter a valid postal code</span>");;
    } 
    if (city.length < 1) {
      $('#city').after("<span class='error'>Please enter your city</span>");
    }  
    else {      
      $('.error').remove();
    }

    $('#state option').each(function (i) {
      if ($(this).is(':selected')){
        if(i === 0){
          $('#state').after("<span class='error'>Please enter your state</span>");
        }
      }
    });
    
  });

});