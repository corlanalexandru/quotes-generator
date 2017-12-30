$(document).ready(function giveQuote() {
  //Call the function onload
  $.getJSON("json/quotes.json",function (json){//Get JSON from external source

    var html = [" "];
    var i = 1;
    var quoteNumber = Math.floor(Math.random() * (json.length - 1 + 1)) + 1;//Generate an integer for getting a random quote

    //Loop through JSON elements to get one of them
    $.each(json, function(key,val){
      html[i] = '<div class="hidden"><p><span class="quote-content">' + val.quote + '</span></p>' + '<p>-' + val.author + '-</p></div>';
      i++;
    });

    // Add the resulting random quote to js-quote section
    $(".js-quote").html(html[quoteNumber]);
    // Fade in effect for quotes
    $('.hidden').fadeIn(2000);
    });

    $.getJSON("json/background.json",function (json_background){//Get JSON from external source

      var html_background = [" "];
      var j = 1;
      var backgroundNumber = Math.floor(Math.random() * (json_background.length - 1 + 1)) + 1;//Generate an integer for getting a random quote

      //Loop through JSON elements to get one of them
      $.each(json_background, function(key,val){
        html_background[j] = "'" + val.img_link + "'";
        j++;
      });

      //Modify the background-image css property of body
      $('body').css('background-image','url('+ html_background[backgroundNumber] + ')' );
    
    });

   //Call the function on click event
    $("#getQuote").on("click",function(){
      giveQuote();
    });

});
