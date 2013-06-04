
$(document).ready(function() {
	$('#sections-button').mouseenter(function(){
		$('#sections-list').show();
	});
	
	$('#sections-container').mouseleave(function() {
		$('#sections-list').hide();	
	});
	/*
	$('.ui-block-b,.ui-block-c,.ui-block-d').live('click', function() {
		$('#notes-button').css('display','none');
	});
	$('.ui-block-a').live('click', function() {
		$('#notes-button').css('display','block');
	});
	*/
	/*
	$('#notes-button').click(function() {
		if($('#notes-button .ui-btn-text').text() == "Show notes") {
			$('#notes-button .ui-icon').removeClass('ui-icon-plus');
			$('#notes-button .ui-icon').addClass('ui-icon-minus');
			$('#notes-button .ui-btn-text').text('Hide notes');
			$('#a').removeClass('hide-notes');
			$('#a').addClass('show-notes');
		} else {
			$('#notes-button .ui-icon').removeClass('ui-icon-minus');
			$('#notes-button .ui-icon').addClass('ui-icon-plus');
			$('#notes-button .ui-btn-text').text('Show notes');
			$('#a').removeClass('show-notes');
			$('#a').addClass('hide-notes');
		}
	});
	*/
	$('.add-sticky').live('click',function() {
		$('#notes-button .ui-icon').removeClass('ui-icon-plus');
		$('#notes-button .ui-icon').addClass('ui-icon-minus');
		$('#notes-button .ui-btn-text').text('Hide notes ');
		$('body').removeClass('hide-notes');
		$('body').addClass('show-notes');
	});
	
	$('#notes-button').click(function() {
		if($('#notes-button .ui-btn-text').text() == "Show notes") {
			$('#notes-button .ui-icon').removeClass('ui-icon-plus');
			$('#notes-button .ui-icon').addClass('ui-icon-minus');
			$('#notes-button .ui-btn-text').text('Hide notes ');
			$('body').removeClass('hide-notes');
			$('body').addClass('show-notes');
		} else {
			$('#notes-button .ui-icon').removeClass('ui-icon-minus');
			$('#notes-button .ui-icon').addClass('ui-icon-plus');
			$('#notes-button .ui-btn-text').text('Show notes');
			$('body').removeClass('show-notes');
			$('body').addClass('hide-notes');
		}
	});
	$('.ui-block-b,.ui-block-c,.ui-block-d').live('click',function() {

		$('.t_Tooltip').css('display','none');
	});
	$('.ui-block-a').live('click',function() {

		$('.t_Tooltip').css('display','block');
	});
	$('.add-sticky').addClass('ui-btn-right ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-left ui-btn-up-a');
	$('.add-sticky').attr('data-role','button');
	$('.add-sticky').attr('data-icon','');
	$('.add-sticky').attr('data-corners','true');
	$('.add-sticky').attr('data-shadow','true');
	$('.add-sticky').attr('data-iconshadow','true');
	$('.add-sticky').attr('data-wrapperels','false');
	$('.add-sticky').attr('data-theme','a');
	$('.add-sticky').css('right','120px');
	$('.add-sticky').append('<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Note</span><span class="ui-icon ui-icon-plus ui-icon-shadow"> </span></span>');

	$('.sticky').live('mouseup mouseleave mouseout focusout blur', function() {
		if($(this).position().top < 110) {
			$(this).css('top','110px');
		}
		/*
		if($(this).position().left < 10) {
			$(this).css('left','10px');
		}
		if($(this).position().left > $(window).width() - $(this).width() ) {
			$(this).css('left',$(window).width() - $(this).width() + 'px');
		}
		if($(this).position().t > $(window).height() - $(this).height() ) {
			$(this).css('top',$(window).height() - $(this).height() + 'px');
		}
		*/
	});

});