
var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
	name: 'Dropbox Paper', // will be inferred if not specified
	targetUrl: 'https://paper.dropbox.com/docs/created-by-me', // required
	platform: 'darwin', // defaults to the current system
	arch: 'x64', // defaults to the current system
	version: '0.36.4',
	out: './build',
	overwrite: false,
	asar: false, // see conceal
	// icon: '~/Desktop/icon.png',
	counter: false,
	// width: 1280,
	// height: 800,
	showMenuBar: true,
	fastQuit: true,
	// userAgent: 'Mozilla ...', // will infer a default for your current system
	ignoreCertificate: true,
	insecure: false,
	honest: false,
	zoom: 1.0
};

nativefier(options, function(error, appPath) {

	if (error) {
		console.error(error);
		return;
	}

	console.log('App has been nativefied to', appPath);

});
