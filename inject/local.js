
// This file will be injected in the web view so you can hack things

// 
// Hack link handling
// 

// Open external links in browser
jQuery('a').on('click', function (event) {
	var el = event.target;

	// Link handling
	if (
		el.tagName.toLowerCase() === 'a' &&    // Is link
		el.href &&                             
		(el.hostname !== location.hostname) &&                   // Is external
		!(event.ctrlKey || event.metaKey || event.shiftKey) &&   // Not using meta key
		(!el.target || el.target === '') &&                      // No target specified
		(el.protocol.substr(0,4) === 'http')                     // Is an HTTP link
	) {
		el.target = '_blank';
	}

});



// 
// Inject menu controls
// 

// Note: looks like we have jQuery,might as well use it
// jQuery('body').append(`
// 	<div class="native-frame-controls">
// 		<div class="native-frame-controls-close"></div>
// 		<div class="native-frame-controls-minify"></div>
// 		<div class="native-frame-controls-maximize"></div>
// 	</div>
// `);

// Window control functionality
// jQuery('.native-frame-controls-close').on('click', function () {})''
