// Using jQuery

$(document).ready(function() {

  var cmpt = 6;



  $('.bonbon').draggable({
    containment : 'main',    revert : 'invalid'
  });

  $('.dropzone').droppable({
    drop : function(){


        cmpt--;
        var newmsg = "Plus que " + cmpt + " bonbon(s) !";
        $('#msgCompteur').text(newmsg);


      if (cmpt == 0) {
        $('#msgCompteur').remove();
        $('#message').html('Bien joué !</br><a href="index.html">Rejouer</a>');
      }

      // while (cmpt > 0) {
      // cmpt--;
      // var newmsg = "Plus que " + cmpt + " bonbon(s) !";
      // $('#msgCompteur').text(newmsg);
      // }



    }



  });



});
