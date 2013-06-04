


	$(document).delegate('#opendialog', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Twitter',
    headerClose: true,
	width: 300,
    blankContent : 
      '<div><a class="twitter-timeline" href="https://twitter.com/dnjonesster" data-widget-id="266409073564585986">Tweets by @dnjonesster</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div>'
+
      "<a rel='close' data-role='button' href='#'>Close</a>"
  });
});
	
	
		$(document).delegate('#faqs', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'FAQs',
    headerClose: true,
	width: 440,
	top: 180,
    blankContent : 
      '<div style="width:400px; margin: 0 auto;"><div data-role="collapsible-set" data-theme="e"><div data-role="collapsible" ><h3>Definition of a "Continuous Time Signal"</h3><p>Continuous Time Signal is a periodic repetition of a rectangular pulse</p></div><div data-role="collapsible" ><h3>What is the "Discrete Fourier Transform"?</h3><p>In mathematics, the discrete Fourier transform (DFT) is a specific kind of discrete transform, used in Fourier analysis. It transforms one function into another, which is called the frequency domain representation, or simply the DFT, of the original function (which is often a function in the time domain). The DFT requires an input function that is discrete.<br /><a href="http://en.wikipedia.org/wiki/Discrete_Fourier_transform">Wikipedia on Discrete Fourier Transform</a></p></div><div data-role="collapsible" ><h3>How is Power of a Signal defined?</h3><p>The energy in one period divided by the length of the period</p></div></div></div>'
  });
});
		
		
		
				$(document).delegate('#about', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'About',
    headerClose: true,
	width: 440,
	top: 180,
    blankContent : 
      '<div style="width:400px; margin: 0 auto;"><p>This course was created by Professor Roberto Cristi at the Naval Postgraduate School, Monterey, CA. Prof. Cristi can be contacted via email with questions: <a href="mailto:rcristi@nps.edu">rcristi@nps.edu</a>. Copyright 2013</p></div>'
  });
});
		
		
		
			$(document).delegate('#forum2', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Sakai Forum',
    headerClose: true,
	width: 600,
	top: 180,
	forceInput: true,
    blankContent : 
      '<div style="margin: 0 auto; padding:0; width:600px; height:500px; overflow:scroll; -webkit-overflow-scrolling: touch;"><iframe style="display:block" seamless sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://cle.nps.edu/direct/forum/2550" width="600px" height="500px"><iframe></div>'
  });
});
		

	$(document).delegate('#facebook', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Facebook',
    headerClose: true,
	width: 300,
    blankContent : 
      '<div><div id="fb-root"></div>' +
	  '<script>(function(d, s, id) {' +
  'var js, fjs = d.getElementsByTagName(s)[0];' +
  'if (d.getElementById(id)) return;' +
  'js = d.createElement(s); js.id = id;' +
  'js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";' +
  'fjs.parentNode.insertBefore(js, fjs);' +
'}(document, "script", "facebook-jssdk"));</script>' +
'<div class="fb-comments" data-href="https://cle.nps.edu/access/content/group/6983bdd7-c84a-4773-a819-15f21ab73e18/" data-num-posts="5" data-width="300"></div><div>'
	  +
      "<a rel='close' data-role='button' href='#'>Close</a>"
	  
  });
});
	
	
	$(document).delegate('#disqus_a1_1', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_1.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
	
	
	$(document).delegate('#disqus_a1_2', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_2.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
	
		$(document).delegate('#disqus_a1_3', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_3.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
		
				$(document).delegate('#disqus_a1_4', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_4.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
				
						$(document).delegate('#disqus_a1_5', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_5.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
						
								$(document).delegate('#disqus_a1_6', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_6.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
								
																$(document).delegate('#disqus_a1_7', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_7.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
																

																$(document).delegate('#disqus_a1_8', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a1_8.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
	
	
		$(document).delegate('#disqus_a2_1', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_1.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
		
			$(document).delegate('#disqus_a2_2', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_2.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
			
			
			$(document).delegate('#disqus_a2_3', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_3.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
			
			$(document).delegate('#disqus_a2_4', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_4.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
			
			$(document).delegate('#disqus_a2_5', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_5.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
			
			$(document).delegate('#disqus_a2_6', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_6.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
			
			$(document).delegate('#disqus_a2_7', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_7.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
	
	
	$(document).delegate('#disqus_a2_8', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a2_8.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
	
	
		$(document).delegate('#disqus_a3_1', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_1.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
	
	
			$(document).delegate('#disqus_a3_2', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_2.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
			
						$(document).delegate('#disqus_a3_3', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_3.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
						
									$(document).delegate('#disqus_a3_4', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_4.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
									
												$(document).delegate('#disqus_a3_5', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_5.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
												
															$(document).delegate('#disqus_a3_6', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_6.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
															
																		$(document).delegate('#disqus_a3_7', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_7.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
																		
		$(document).delegate('#disqus_a3_8', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: false,
	zindex: 5000,
	width: 360,
    blankContent : 
      '<div style="background-color:#ffffff;"><iframe src="https://cle.nps.edu/access/content/group/90852c06-942d-444e-82ea-58e84b514189/mobile/disqus_a3_8.html" style="margin:0 auto;" scrolling="auto" type="text/html" seamless="true" width="360" height="480" frameborder="0"></iframe><div>'
	 
	  
  });
});
	

