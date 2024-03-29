



//Custom highlighting script dependent on Rangy

// Highlight object
var highlight;
var note_count = 0;
//function addLocalStorage() {
	//localStorage.setItem(current_page_title, $('body').html());
	//alert(localStorage.getItem(current_page_title));
//}

// Assigns rangy css class applier 
window.onload = function() {
	var cssClassApplierModule = rangy.modules.CssClassApplier;
	highlight = rangy.createCssClassApplier("highlight",  {
		elementProperties: {
			id: "new-note-" + note_count,
		}
	});
}

function newNote() {
	highlight = rangy.createCssClassApplier("highlight", {
		elementProperties: {
			id: "new-note-" + note_count,
		},
	});
	addNoteIcon();
	note_count++;
	return;
}

function addNoteIcon() {
	var highlight_id = "new-note-" + note_count; 
	$('#' + highlight_id).after('<img id=note-icon-' + note_count + ' src="images/note-icon.png" alt="note-icon"/>');
	return;
}

$(document).bind('pageinit', function(){
	//localStorage.clear();
	//var abs_path = $(location).attr('href'); //Absolute page of current page
	//var current_page = abs_path.substring(abs_path.lastIndexOf('/')); // Current page file name with extention
	//var current_page_title = current_page.substring(1,current_page.lastIndexOf('.')); // Current page file name without extention

	//if(localStorage.getItem(current_page_title) != null) {
		//$('body').html(localStorage.getItem(current_page_title));
	//}
	

	// Calls highlighter on mouseup event if text is selected
	$('.content_div').bind('mouseup vmouseup touchend',function(){
		$('.ui-simpledialog-container').remove();
		var sel = rangy.getSelection();
		if(sel.toString().length > 0) {
			if(highlight.isAppliedToSelection(sel)) {
				 $('<div>').simpledialog2({
					mode: 'button',
					animate: false,
					buttons : {
					  'Unhighlight': {
						click: function () {
						 highlight.toggleSelection();
						 window.getSelection().removeAllRanges();
						},
					  },
					 'Color...': {
						click: function () {
							chooseColor();
							window.getSelection().removeAllRanges();
						},
						icon: "",
					 },
					 'Cancel': {
						click: function () { 
						  window.getSelection().removeAllRanges();
						},
						icon: "delete",
						theme: "a"
					  }
					}
				  });
			} else {
				$('<div>').simpledialog2({
					mode: 'button',
					animate: false,
					buttons : {
					  'Highlight': {
						click: function () {
							highlight.toggleSelection();
							newNote();
							window.getSelection().removeAllRanges();
						},
					  },
				     'Color...': {
						click: function () {
							chooseColor();
							window.getSelection().removeAllRanges();
						},
						icon: "",
					  },
					  'Cancel': {
						click: function () { 
							window.getSelection().removeAllRanges();
						},
						icon: "delete",
						theme: "a"
					  }
					}
				  });
			}
			
		}
	});
}); 