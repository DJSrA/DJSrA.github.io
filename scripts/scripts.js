$( document ).ready(function() {
  $('.look-there').click(function(){
    if($('.contact-form').hasClass('slide-toggle')){
      $('.contact-form').removeClass('slide-toggle');
      $('.look-there').text('CONTACT ME');
      $('.submit-message-container').removeClass('dont-display');

    } else {
      $('.contact-form').addClass('slide-toggle');
      $('.look-there').text('CLOSE FORM');
    }
    if($('.submit-message-container').hasClass('dont-display')){
      $('.submit-message-container').addClass('dont-display');
    } else {
      $('.submit-message-container').removeClass('dont-display');
    }
    $('.template-here').html($('.contact-form-content').html());
  })

  $('.close-x').click(function(){
    if($('.contact-form').hasClass('slide-toggle')){
      $('.contact-form').removeClass('slide-toggle');
      $('.look-there').text('CONTACT ME');
      $('.submit-message-container').removeClass('dont-display');

    } else {
      $('.contact-form').addClass('slide-toggle');
      $('.look-there').text('CLOSE FORM');
    }
    if($('.submit-message-container').hasClass('dont-display')){
      $('.submit-message-container').addClass('dont-display');
    } else {
      $('.submit-message-container').removeClass('dont-display');
    }
    $('.template-here').html($('.contact-form-content').html());
  });

  $('#submit-message').click(function(){
    console.log('email sent');
    // $.ajax({
      // type: 'POST',
      // url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      // data: {
      //   'key': 'b6t3hTJ_NEL7lz8ulPoHuQ',
      //   'message': {
      //     'from_email': $('#email-input').val(),
      //     'to': [
      //         {
      //           'email': 'daniel.jeffords@gmail.com',
      //           'name': 'Personal Site Contact ' + $('#name-input').val(),
      //           'type': 'to'
      //         }
      //       ],
      //     'autotext': 'true',
      //     'subject': 'Personal Site',
      //     'html': 'MESSAGE: ' + $('#message-input').val() + '<br />EMAIL: ' + $('#email-input').val() + '<br />NAME: ' + $('#name-input').val()
      //   }
      // }
     // }).done(function(response) {
     //  console.log($('#email-input').val())
     // });
    emailResponse();
  })

  var emailResponse = function(){
    // $.ajax({
      // type: 'POST',
      // url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      // data: {
      //   'key': 'b6t3hTJ_NEL7lz8ulPoHuQ',
      //   'message': {
      //     'from_email': 'daniel.jeffords@gmail.com',
      //     'to': [
      //         {
      //           'email': $('#email-input').val(),
      //           'name': 'Daniel Jeffords - ' + $('#name-input').val(),
      //           'type': 'to'
      //         }
      //       ],
      //     'autotext': 'true',
      //     'subject': $('#name-input').val() + ' - Thank you for contacting Daniel Jeffords!',
      //     'html': $('.email-template').html()
      //   }
      // }
     // }).done(function(response) {
      // console.log(response); // if you're into that sorta thing
      submittedTemplate();
     // });
  }

  var submittedTemplate = function(){
    $('input').val('');
    $('textarea').val('');
    $('.submit-message-container').addClass('dont-display');
    $('.contact-us-list').css('opacity', 0);
    setTimeout(animateSubmitted, 500);

  }

  var animateSubmitted = function(){
    $('.template-here').html($('.submitted-template').html())
    setTimeout(finishSubmitted, 400);
  }

  var finishSubmitted = function(){
    $('.submitted-container').css('opacity', 1);
    $('.submitted-container h1').css('padding-top', '0px');
    $('.submitted-container h1').css('padding-bottom', '40px');
    $('.submitted-container p').css('padding-bottom', '0px');
  }
})