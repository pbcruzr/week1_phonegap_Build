

$(document).bind('pagecreate',function(){

		//get the current file's name
		var absPath = $(location).attr('href');
		var absFilename=absPath.substring(absPath.lastIndexOf('/')+1); // Current page file name with extention
	
		//go through files
		var numFiles=filesJSONObj.files.length;
		
		$(filesJSONObj.files).each(function(idx,file) {
			if (file.filename == absFilename) {
				$('div#pagenav').append('<a href="index.html" data-icon="home" data-iconpos="left" data-role="button" id="home">Home</a>');
				$('title').html(file.title);
				
				if (idx != 0) {
					$('div#pagenav').append('<a rel="external"  href="'+filesJSONObj.files[idx-1].filename+'" data-role="button" class="ui-button-active">'+filesJSONObj.files[idx-1].title+'</a>');
				}
			
				$('div#pagenav').append('<a rel="external"  href="'+file.filename+'" data-role="button" class="ui-button-active">'+file.title+'</a>');
		
				if (idx+1 != numFiles) {
					$('div#pagenav').append('<a rel="external"  href="'+filesJSONObj.files[idx+1].filename+'" data-role="button" class="ui-button-active">'+filesJSONObj.files[idx+1].title+'</a>');
				}
			}
		});

			//$('div#pagenav a').button();		
			//$('div#pagenav').controlgroup('refresh');
		// individual chapters dropdown menu
	//	$('#current').append('<ul id="dropDownNav" style="position:absolute; margin: 0 auto; width:200px; left:0; right:0; top:38%; bottom:0;  z-index:60000; text-align:center; opacity:.85; " ><li><a href="http://dianej.com/cmt/a1_1_basicDefinitions.html">Chapter 1 &raquo;</a></li><li><a>Chapter 2 &raquo;</a></li><li><a>Chapter 3 &raquo;</a></li><li><a>Chapter 4 &raquo;</a></li><li><a>Chapter 5 &raquo;</a></li><li><a>Chapter 6 &raquo;</a></li><li><a>Chapter 7 &raquo;</a></li><li><a>Chapter 8 &raquo;</a></li><li><a>Chapter 9 &raquo;</a></li><li><a>Chapter 10 &raquo;</a></li><li><a>Chapter 11 &raquo;</a></li></ul>');
		
		
//$('.add-sticky').append('<span style="font-size: .5em; margin-top: 10px; display: block; line-height: 50px; margin-left: 50px; margin-top: -49px;">Note</span>');


});	// JavaScript Document