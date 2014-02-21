$(document).ready( function() {


        $.getJSON( "data/input.json")
        .done(function( data ) {
        $.each( data, function( i ) {
        $( "div#galleryimagelist" ).append("<div class="+"\"item\""+"><img src="+data[i].urltext+"><p>"+data[i].text+"</p></div>");
      });
    });

        


    
  });