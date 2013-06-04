// JavaScript Document

	$(function() {
		$('img').toggle (
		function(event) {
				$(event.target)
				.css('-moz-transform','scale(1.33)')
				.css('-webkit-transform','scale(1.33)');
		},
		function(event) {
				$(event.target)
				.css('-moz-transform','scale(1)')
				.css('-webkit-transform','scale(1)');
		}
		);
	});
	
	

	$(document).bind("mobileinit",function() {
		$.mobile.touchOverflowEnabled = true; 
	});



	$(document).bind("mobileinit", function() {
   $("#two").live("swiperight", goBackToPage1);
});

function goBackToPage1() {
   $.mobile.changePage("#one", { reverse: true });
   $("#two").unbind("swiperight", goBackToPage1);
}

/*    
  $('.sticky-content').click(function() {
    $(this).text('');
});

    $(document).bind("pageinit",function() {
	  $("[data-role=header]").fixedtoolbar({ tapToggleBlacklist: "a, input, select, textarea, .ui-header-fixed, .ui-footer-fixed" });
	});


$('div[data-role="navbar"] a').live('click', function () {
    $(this).addClass('ui-btn-active');
    $('div.content_div').hide();
    $($(this).attr('data-href')).show();
}); 
*/


$(document).bind('pagecreate',function(){

		//get the current file's name
		var absPath = $(location).attr('href');
		var absFilename=absPath.substring(absPath.lastIndexOf('/')+1); // Current page file name with extention
	
		//go through files
		var numFiles=filesJSONObj.files.length;
		
		$(filesJSONObj.files).each(function(idx,file) {
			if (file.filename == absFilename) { 
				$('div#pagenav').append('<a  rel="external" href="index.html" data-icon="home" data-iconpos="left" data-role="button" id="home">Home</a>');
				$('title').html(file.title);
				
				if (idx != 0) {
					$('div#pagenav').append('<a  rel="external" href="'+filesJSONObj.files[idx-1].filename+'" data-icon="arrow-l" data-role="button" data-icon-pos="left">'+filesJSONObj.files[idx-1].title+'</a>');
				}
			
				$('div#pagenav').append('<a  rel="external" href="'+file.filename+'" data-role="button" data-icon="" class="ui-btn-active">'+file.title+'</a>');
		
				if (idx+1 != numFiles) {
					$('div#pagenav').append('<a rel="external" href="'+filesJSONObj.files[idx+1].filename+'" data-role="button" data-icon="arrow-r" data-iconpos="right">'+filesJSONObj.files[idx+1].title+'</a>');
				}
			}
		});

});	


// JavaScript Document