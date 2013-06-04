// JavaScript Document
//Custom highlighting script dependent on Rangy
//courtesy Tim Downs: http://stackoverflow.com/questions/8339857/how-to-know-if-selected-text-is-inside-a-specific-div

function isOrContains(node, container) {
    while (node) {
        if (node === container) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

function elementContainsSelection(el) {
    var sel;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount > 0 && sel.toString().length > 0) {
            for (var i = 0; i < sel.rangeCount; ++i) {
                if (!isOrContains(sel.getRangeAt(i).commonAncestorContainer, el)) {
                    return false;
                }
            }
            return true;
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        return isOrContains(sel.createRange().parentElement(), el);
    }
    return false;
}

// Highlight object
var highlight;
var isHighlighting;
//function addLocalStorage() {
	//localStorage.setItem(current_page_title, $('body').html());
	//alert(localStorage.getItem(current_page_title));
//}

$(document).bind('pageinit', function(){
	rangy.init();
	var cssClassApplierModule = rangy.modules.CssClassApplier;
	highlight = rangy.createCssClassApplier("highlight");
	
	var absPath=$(location).attr('href');
	var absFilename=absPath.substring(absPath.lastIndexOf('/')+1);
	
	$('div#a').bind('mouseup tap vmouseup',function(){
		var el=document.getElementById('a');
		if ($('select#note_highlight').val() == 'on' && elementContainsSelection(el)) {
			var sel = rangy.getSelection();	
			//alert(sel);
			var selObj,selLen;
			highlight.toggleSelection();
			if (sel.toString().length>0 && window.localStorage!=undefined) {
				//alert("Got past local storage test in pageinit");
				selectionsJSONObj=window.localStorage.getItem(absPathname);
			//got the length of the retrieved selection here
			 	if (selectionsJSONObj!=undefined) {
					selLen=selectionsJSONObj.length;
			 	} else {
					selLen=0;
			 	}
				alert("the array length is:"+selLen);
				/*selectionsJSONObj[selLen]=rangy.serializeSelection(sel,"div#a");
				alert("rangy selection is:"+selectionsJSONObj[selLen]);
				*/
			}
		}
		window.getSelection().removeAllRanges();	
	});
		
	$(document).bind('pageshow',function() {
		if (window.localStorage!=undefined) {
			var JSONObj=window.localStorage.getItem(absPathname);
			var selections=jquery.parseJSON(JSONObj);
			//go through each selection, test each selection separately for 
			//the ability to deserialize
			$(selections).each(function(idx,selection) {
				if (rangy.canDeserializeSelection(selection,"div#a")) {
					rangy.deserializeSelection(selection,"div#a");
				}
			});
		
	
		}
	});
	
}); 