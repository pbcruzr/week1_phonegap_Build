// JavaScript Document

$(document).bind("mobileinit", function() {
										
if (window.applicationCache!=undefined){
		window.applicationCache.addEventListener('checking', function() {
			$("#consoleInstall").html("Checking version");
		});
		window.applicationCache.addEventListener('downloading', function() {
			$("#consoleInstall").html("Downloading application. Please wait...");
		});
		window.applicationCache.addEventListener('cached', function() {
			$("#consoleInstall").html("Application downloaded");
			$("#install").show();
		});
		window.applicationCache.addEventListener('updateready', function() {
			$("#consoleInstall").html("Application downloaded");
			$("#install").show();
		});
		window.applicationCache.addEventListener('noupdate', function() {
			$("#consoleInstall").html("Application downloaded");
			$("#install").show();
		});
		window.applicationCache.addEventListener('error', function(e) {
			$("#consoleInstall").html("There was an error downloading this app");
			
		});
}

});
	