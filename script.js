// Using jQuery

$(document).ready(function() {

  var count = 6;


  $('.bonbon').draggable({
    containment : 'main',    revert : 'invalid'
  });

  $('.dropzone').droppable({
    drop : function() {
      if(count >0){
        count--;
        var newmsg = "Plus que " + count + " bonbon(s) !";
        $('#compteur').text(newmsg);
      }
      else {
        $('#compteur').remove();
        $('#message').html('Bien joué !</br><a href="index.html">Rejouer</a>');

      }


    }
  });



});
