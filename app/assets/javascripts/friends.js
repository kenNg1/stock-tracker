var init_friend_lookup;

init_friend_lookup = function() {
  $('#friend-lookup-form').on('ajax:before', function(event,data,status){
    show_spinner();
  });
  $('#friend-lookup-form').on('ajax:after', function(event,data,status){
    hide_spinner();
  });
  $('#friend-lookup-form').on('ajax:success', function(event, data, status){
    $('#friend-lookup').html(data);



    init_friend_lookup();
  });

  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#friend-lookup-results').html(' ');
    $('#friend-lookup-errors').html('person was not found');
  });
};

$(document).ready(function(){
  init_friend_lookup();
})


// line 6 - listeners are gone after you use replaceWith method so you need to reinitialise it again to bring back the listeners
