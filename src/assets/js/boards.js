/* eslint-disable no-undef */
$(document).ready(function() {
  $('.board-button').on('click', function(e) {
    let id = e.target.id;
    fetch(`/boards/${id}/tasks`, {
      method: 'GET'
    }).then(function(response) {
      if(response.ok) {
        location.replace(`/boards/${id}/tasks`);
      }
    });
  });
});