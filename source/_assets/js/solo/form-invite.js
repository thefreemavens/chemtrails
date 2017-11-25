// $(document).ready(function() {

//   // $('#contact-email').delay(133).fadeIn(function() { $(this).focus(); });

//   // Button on/off mute
//   $('#contact-email').keyup(function() {
//     if ( ($(this).val().indexOf('@') >= 0) && ($(this).val().indexOf('.') >= 0) ) {
//       $('#contact-form-submit').removeClass('tfm-btn-mute').addClass('tfm-btn-color');
//       $('#tfm-join').attr('action', '//docs.google.com/forms/d/e/1FAIpQLSc02pJW9A3vfC9nkzhkx5R3DajMl7vvO7kNCc5S9QWQ7rd4DA/formResponse');
//     }
//     else {
//       $('#contact-form-submit').removeClass('tfm-btn-color').addClass('tfm-btn-mute');
//       $('#tfm-join').attr('action', '');
//     }
//   });

//   // Form custom post to sheets + validation
//   $('#contact-form-submit').click(function(e) {
//     // e.preventDefault();
//     var contactEmail = $('#contact-email').val();
//     var url = "//docs.google.com/forms/d/e/1FAIpQLSc02pJW9A3vfC9nkzhkx5R3DajMl7vvO7kNCc5S9QWQ7rd4DA/formResponse";
//     var data = {'entry.1097449195': contactEmail};
    
//     if ($.trim(contactEmail).length == 0) {
//       // alert('Please enter valid email address');
//       e.preventDefault();
//     }
    
//     if (validateEmail(contactEmail)) {
//       $.ajax({
//         type: "POST",
//         url: url,
//         dataType: "json",
//         data: data,
//         statusCode: {
//           0: function() {
//                   console.log("success");
//                   window.location.href = "../confirmation/";
//           }
//         }
//       });
//       e.preventDefault();
//     }

//     else {
//       // alert('Invalid Email Address');
//       e.preventDefault();
//     }

//   }); // End form
// }); // End document ready

// // Validate email filter
// function validateEmail(contactEmail) {
//   var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//   if (filter.test(contactEmail)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
