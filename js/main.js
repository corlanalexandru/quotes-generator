$(document).ready(function giveQuote() {
  //Call the function onload
  $.getJSON("json/quotes.json",function (json){//Get JSON from external source

    var html = [" "];
    var i = 1;
    var quoteNumber = Math.floor(Math.random() * (json.length - 0 + 1)) + 0;//Generate an integer for getting a random quote

    //Loop through JSON elements to get one of them
    $.each(json, function(key,val){
      html[i] = '<p><span class="quote-content">' + val.quote + '</span></p>' + '<p>-' + val.author + '-</p>';
      i++;
    });

    $(".js-quote").html(html[quoteNumber]);

  });
    $("#getQuote").on("click",function(){giveQuote();});

});
