(function($) {
  $(function() {
    //Dyamic Footer Date Functionality=====================//
    const d = new Date();
    const theYear = d.getFullYear();
    $('#footerdate').html(theYear);

    //Contact Form SMTP===========================//
    $('#contactsubmit').on('click', function(event) {
      event.preventDefault();

      var name = $('#name').val();
      var email = $('#email').val();
      var subject = $('#subject').val();
      var message = $('#message').val();
      var body =
        '(Client Name): ' +
        name +
        ' (Client Email): ' +
        email +
        ' (Subject): ' +
        subject +
        ' (Message): ' +
        message;
      console.log(body);

      Email.send(
        'contact@jphomeinspections.com',
        'davidsthrasher@gmail.com',
        subject,
        body,
        { token: '36d44dd0-9319-407d-85b0-62e5ea94cffa' }
      );

      //SMTP TOKEN 36d44dd0-9319-407d-85b0-62e5ea94cffa//

      $('#thankyou').append(
        '<p>Thank you for contacting JP Home Inspections. We will get back to you as soon as possible!</p>'
      );

      setTimeout(function() {
        $('#thankyou').empty();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
      }, 3000);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
