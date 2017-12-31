$(document).ready(function () {

	$(".twitter_post").on("click",function(){
		// Get the quote and the quoteAuthor on click
		var quote = $('.quote-content').text();
		var quoteAuthor = $('.quote-author').text();
		// Get platform
		var platform = "twitter";
		var url = 'Quotes_Generator';

		if (platform == 'twitter') {
			// Put all strings in the message variable
			var message = " ' " + quote + " ' - " + quoteAuthor;
			var shareurl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(message) + '&url= ' + encodeURIComponent(url);
			var newpage = window.open(shareurl,'_blank');
			if (newpage) { newpage.focus(); } // new window opened successfully
			else { window.location = shareurl; } // browser blocked the new window, so redirect the current window instead
		}else { alert('Invalid social share platform.'); }
	});
});
