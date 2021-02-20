/* eslint-disable no-undef */
$(document).ready(function(){
  $.get('/api/user_data').then(function(data) {
    $('#userId').text(`User ID: ${data.id}`);
    $('#userEmail').text(data.email);
  });
  
  $('.sidenav').sidenav();
});
