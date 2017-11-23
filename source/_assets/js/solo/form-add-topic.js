$(document).ready(function() {



  // Button on/off mute
  $('#contact-email').keyup(function() {
    if ( ($(this).val().indexOf('@') >= 0) && ($(this).val().indexOf('.') >= 0) ) {
      $('#form-submit').removeClass('tfm-btn-mute').addClass('tfm-btn-color');
      $('#tfm-add-topic').attr('action', '//docs.google.com/forms/d/e/1FAIpQLSersCpQSxtExrKGU59ApERC-ykgYSrB71Uq6WoIcnaDid7wvg/formResponse');
    }
    else {
      $('#form-submit').removeClass('tfm-btn-color').addClass('tfm-btn-mute');
      $('#tfm-add-topic').attr('action', '');
    }
  });

  // Form custom post to sheets + validation
  $('#form-submit').click(function(e) {
    // e.preventDefault();
    var contactEmail = $('#contact-email').val();
    var contactTopic = $('#contact-topic').val();

    var url = "//docs.google.com/forms/d/e/1FAIpQLSersCpQSxtExrKGU59ApERC-ykgYSrB71Uq6WoIcnaDid7wvg/formResponse";
    var data = {
      'entry.1097449195': contactEmail,
      'entry.1406289047': contactTopic,
    };
    
    if ($.trim(contactEmail).length == 0) {
      // alert('Please enter valid email address');
      e.preventDefault();
    }
    
    if (validateEmail(contactEmail)) {
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: data,
        statusCode: {
          0: function() {
                  console.log("success");
                  window.location.href = "/community/research-topics/add-topic/confirmation/";
          }
        }
      });
      e.preventDefault();
    }

    else {
      // alert('Invalid Email Address');
      e.preventDefault();
    }

  }); // End form
}); // End document ready

// Validate email filter
function validateEmail(contactEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(contactEmail)) {
    return true;
  }
  else {
    return false;
  }
}
