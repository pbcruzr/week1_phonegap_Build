$(document).ready(function(){

		
		var size = 6; // Size of Array (Number of html files)

		var pages = new Array(size); // Create new pages array
		
		// Create array within pages array (Simulate two-dimensional array)
		for (var k = 0; k < size; k++) {
			pages[k] = new Array(size);
		}
		
		//First dimension is file name without .html extention, second is text to appear in link 
		pages[0][0] = "a1_1_basicDefinitions";
		pages[0][1] = "A1.1 Basic Definitions";
		pages[1][0] = "a1_2_energySignal";
		pages[1][1] = "A1.2 Energy Signal";
		pages[2][0] = "a1_3_powerSignals";
		pages[2][1] = "A1.3 Power Signals";
		pages[3][0] = "a1_4_decibells";
		pages[3][1] = "A1.4 Decibels";
		pages[4][0] = "a1_5_SignalNoiseRatio";
		pages[4][1] = "A1.5 Signal Noise Ratio";
		pages[5][0] = "a1_6_QuantizationNoise";
		pages[5][1] = "A1.6 Quantization Noise";

		var abs_path = $(location).attr('href'); //Absolute page of current page
		var current_page = abs_path.substring(abs_path.lastIndexOf('/')); // Current page file name with extention
		var current_page_title = current_page.substring(1,current_page.lastIndexOf('.')); // Current page file name without extention
		
		var pos = 0; // Current page position in page array
		
		// Loop through pages array
		for(var i = 0; i < pages.length; i++) {
			//  Break when current page title is found
			if (pages[i][0] == current_page_title) {
				pos = i; // Set pos equal to current page position i pages array and break
				break;
			}
		}
		
		
		if (current_page_title == "table_of_contents") {		
			$('#prev').html(' ');
			$('#current').html('<h2>Table of contents</h2>');
			$('#next').html(' ');		
		} else if(pos == 0) {
			$('#prev').html('<a rel="external" href="index.html">Table of contents</a>');
			$('#current').html(pages[0][1]);
			$('title').html(pages[0][1]);
			$('#next').html('<a rel="external" href="' + pages[1][0] + '.html">' + pages[1][1] + '</a>');
		} else if(pos+1 == pages.length) {
			$('#prev').html('<a rel="external" href="' + pages[pos-1][0] + '.html">' + pages[pos-1][1] + '</a>');
			$('#current').html(pages[pos][1]);
			$('title').html(pages[pos][1]);
			$('#next').html('<a rel="external" href="index.html">Back to table of contents</a>');
		} else {
			$('#prev').html('<a rel="external" href="' + pages[pos-1][0] + '.html">' + pages[pos-1][1] + '</a>');
			$('#current').html(pages[pos][1]);
			$('title').html(pages[pos][1]);
			$('#next').html('<a rel="external" href="' + pages[pos+1][0] + '.html">' + pages[pos+1][1] + '</a>');
		}
		
		// individual chapters dropdown menu
		$('#current').append('<ul id="dropDownNav" style="position:absolute; margin: 0 auto; width:200px; left:0; right:0; top:38%; bottom:0;  z-index:60000; text-align:center; opacity:.85; " ><li><a href="http://dianej.com/cmt/a1_1_basicDefinitions.html" rel="external">Chapter 1 &raquo;</a></li><li><a>Chapter 2 &raquo;</a></li><li><a>Chapter 3 &raquo;</a></li><li><a>Chapter 4 &raquo;</a></li><li><a>Chapter 5 &raquo;</a></li><li><a>Chapter 6 &raquo;</a></li><li><a>Chapter 7 &raquo;</a></li><li><a>Chapter 8 &raquo;</a></li><li><a>Chapter 9 &raquo;</a></li><li><a>Chapter 10 &raquo;</a></li><li><a>Chapter 11 &raquo;</a></li></ul>');
		
		

$('.add-sticky').append('<span style="font-size: .5em; margin-top: 10px; display: block; line-height: 50px; margin-left: 50px; margin-top: -49px;">Note</span>');


});	