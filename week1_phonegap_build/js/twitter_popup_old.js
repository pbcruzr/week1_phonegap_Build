


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
	
	
		$(document).delegate('#disqus2', 'click', function() {
  // NOTE: The selector can be whatever you like, so long as it is an HTML element.
  //       If you prefer, it can be a member of the current page, or an anonymous div
  //       like shown.
  $('<div>').simpledialog2({
    mode: 'blank',
    headerText: 'Disqus',
    headerClose: true,
	width: 300,
    blankContent:
	 '<div id="disqus_thread" style="padding:24px; background-color:#ffffff;"></div>' +
        '<script type="text/javascript">' +
            "var disqus_shortname = 'eo3404dsp';" +
			"var disqus_identifier = 'a1_3_powerSignals';" +
    "var disqus_url = 'https://cle.nps.edu/access/content/group/6983bdd7-c84a-4773-a819-15f21ab73e18/a1_3_powerSignals.html';" +
	"var disqus_title = 'EO3404: Introduction to Signals, A1.3 Power of a Signal';" +
	"(function(){" +
                "var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;" +
                "dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';" +
                "(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);" +
           " })();" +
        "</script>" +
        "<noscript>Please enable JavaScript to view the <a href='http://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>" +
        "<a href='http://disqus.com' class='dsq-brlink'>comments powered by <span class='logo-disqus'>Disqus</span></a>"
	 +
	
      "<a rel='close' data-role='button' href='#'>Close</a>"
	  
  });
});
		
		

