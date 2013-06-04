$(document).ready(function(){
	
		var pages = new Array('text','text1','text2');
		var chap
		var abs_path = $(location).attr('href');
		var current_page = abs_path.substring(abs_path.lastIndexOf('/'));
		var current_page_title = current_page.substring(1,current_page.lastIndexOf('.'));
		$('title').html(current_page_title);
		$('#current').html(current_page_title);
		
		if (current_page_title != "table_of_contents")
			$('#content').html('<p> This page is ' + current_page_title + '</p>');
		var pos = 0;
		for(var i = 0; i < pages.length; i++) {
			
			if (pages[i] == current_page_title) {
				pos = i;
				break;
			}
		}
		
		
		if (current_page_title == "table_of_contents") {		
			$('#prev').html(' ');
			$('#current').html('<h2>Table of contents</h2>');
			$('#next').html(' ');		
		} else if(pos == 0) {
			$('#prev').html('<a rel="external" href="table_of_contents.html">Table of contents</a>');
			$('#current').html(pages[0]);
			$('#next').html('<a rel="external" href="' + pages[1] + '.html">' + pages[1] + '</a>');
		} else if(pos+1 == pages.length) {
			$('#prev').html('<a rel="external" href="' + pages[pos-1] + '.html">' + pages[pos-1] + '</a>');
			$('#current').html(pages[pos]);
			$('#next').html('<a rel="external" href="table_of_contents.html">Back to table of contents</a>');
		} else {
			$('#prev').html('<a rel="external" href="' + pages[pos-1] + '.html">' + pages[pos-1] + '</a>');
			$('#current').html(pages[pos]);
			$('#next').html('<a rel="external" href="' + pages[pos+1] + '.html">' + pages[pos+1] + '</a>');
		}
		
			//$('#current').append('<ul class="sub-menu"></ul>');
			
			////for(var j = 0; j < pages.length; j++) {
				
				$('#current .sub-menu').append('<li><a rel="external" href="' + pages[j] + '.html">' + pages[j] + '</a></li>');

			//}
			
$('.add-sticky').append('<span style="font-size: .5em; margin-top: 10px; display: block; line-height: 50px; margin-left: 150px; margin-top: -49px;">Add Sticky Note</span>');


});	