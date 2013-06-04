    $(document).ready(function() {
  $("[data-role=header]").fixedtoolbar({ tapToggleBlacklist: "a, input, select, textarea, .ui-header-fixed, .ui-footer-fixed" });
                               });

$(document).bind("mobileinit", function(){
	$("[data-role=header]").fixedtoolbar({ tapToggle: false })
	$("[data-role=header]").fixedtoolbar({ tapToggleBlacklist: "a, input, select, textarea, .ui-header-fixed, .ui-footer-fixed" }); 
});
 
 
 