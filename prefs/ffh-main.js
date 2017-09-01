/**********************
 * Firefox components *
 **********************/

// Health reports
defaultPref("datareporting.healthreport.uploadEnabled",			false);
defaultPref("datareporting.healthreport.about.reportUrl",		"");
defaultPref("datareporting.healthreport.documentServerURI",		"");	// Hidden option
defaultPref("datareporting.policy.dataSubmissionEnabled",		false);

// Crash reports
defaultPref("breakpad.reportURL",					"");
defaultPref("browser.crashReports.unsubmittedCheck.autoSubmit",		false);
defaultPref("browser.crashReports.unsubmittedCheck.enabled",		false);
defaultPref("browser.tabs.crashReporting.sendReport",			false);
defaultPref("browser.tabs.crashReporting.requestEmail",			false);
defaultPref("browser.tabs.crashReporting.includeURL",			false);
defaultPref("browser.tabs.crashReporting.emailMe",			false);
defaultPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",	false);
defaultPref("dom.ipc.plugins.reportCrashURL",				false);

// Telemetry
defaultPref("toolkit.telemetry.enabled",				false);
defaultPref("toolkit.telemetry.unified",				false);
defaultPref("toolkit.telemetry.cachedClientID",				"");
defaultPref("toolkit.telemetry.server",					"");

// Telemetry experiments
defaultPref("experiments.enabled",					false);
defaultPref("experiments.activeExperiment",				false);
defaultPref("experiments.supported",					false);
defaultPref("experiments.manifest.uri",					"");
defaultPref("network.allow-experiments",				false);

// Pocket
defaultPref("extensions.pocket.enabled",				false);
defaultPref("extensions.pocket.api",					"");	// Hidden option
defaultPref("extensions.pocket.oAuthConsumerKey",			"");	// Hidden option
defaultPref("extensions.pocket.site",					"");	// Hidden option

// Suggested sites
defaultPref("browser.newtabpage.enhanced",				false);
defaultPref("browser.newtabpage.introShown",				true);
defaultPref("browser.newtabpage.directory.ping",			"");
defaultPref("browser.newtabpage.directory.source",			"");

// Safe browsing
defaultPref("browser.safebrowsing.malware.enabled",			false);
defaultPref("browser.safebrowsing.phishing.enabled",			false);
defaultPref("browser.safebrowsing.downloads.enabled",			false);
defaultPref("browser.safebrowsing.downloads.remote.enabled",				false);
defaultPref("browser.safebrowsing.downloads.remote.block_dangerous",			false);
defaultPref("browser.safebrowsing.downloads.remote.block_dangerous_host",		false);
defaultPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted",		false);
defaultPref("browser.safebrowsing.downloads.remote.block_uncommon",			false);
defaultPref("browser.safebrowsing.downloads.remote.url",				"");

// Google SafeBrowsing update URLs
defaultPref("browser.safebrowsing.provider.google.updateURL",	"");
defaultPref("browser.safebrowsing.provider.google.gethashURL",	"");
defaultPref("browser.safebrowsing.provider.google4.updateURL",	"");
defaultPref("browser.safebrowsing.provider.google4.gethashURL",	"");

// Mozilla SafeBrowsing update URLs
defaultPref("browser.safebrowsing.provider.mozilla.updateURL",	"");
defaultPref("browser.safebrowsing.provider.mozilla.gethashURL",	"");

// SafeBrowsing reporting URLs
defaultPref("browser.safebrowsing.provider.google.reportURL",	"");
defaultPref("browser.safebrowsing.provider.google4.reportURL",	"");
defaultPref("browser.safebrowsing.reportMalwareMistakeURL",	"");
defaultPref("browser.safebrowsing.reportPhishMistakeURL",	"");
defaultPref("browser.safebrowsing.reportPhishURL",		"");

// Heartbeat
defaultPref("browser.selfsupport.enabled",			false);	// Hidden option
defaultPref("browser.selfsupport.url",				"");

// WebIDE
defaultPref("devtools.webide.enabled",				false);
defaultPref("devtools.webide.autoinstallADBHelper",		false);
defaultPref("devtools.webide.autoinstallFxdtAdapters",		false);

// Remote debugging
defaultPref("devtools.debugger.remote-enabled",			false);



/**************
 * Extensions *
 **************/

// Extension updates
defaultPref("extensions.update.enabled",		true);

// Extension block list
defaultPref("extensions.blocklist.enabled",		true);
defaultPref("services.blocklist.update_enabled",	true);
defaultPref("extensions.blocklist.url",			"https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");

// Extension metadata update
defaultPref("extensions.getAddons.cache.enabled",	false);

// Click to play
defaultPref("plugins.click_to_play",			true);

// Flash
defaultPref("plugin.state.flash",			0);

// Java
defaultPref("plugin.state.java",			0);

// Gnome Shell integration
defaultPref("plugin.state.libgnome-shell-browser-plugin",		0);	// Not found, probably only available if using Gnome Shell



/****************
 * Cryptography *
 ****************/

// TLS versions
defaultPref("security.tls.version.min",				1);
defaultPref("security.tls.version.max",				4);

// TLS version fallback
defaultPref("security.tls.version.fallback-limit",		3);

// Session tickets
defaultPref("security.ssl.disable_session_identifiers",		true);	// Hidden option

// OCSP
defaultPref("security.OCSP.enabled",				1);

// OCSP stapling
defaultPref("security.ssl.enable_ocsp_stapling",		true);

//
defaultPref("security.cert_pinning.enforcement_level",		2);

// SSL error reporting
defaultPref("security.ssl.errorReporting.enabled",		false);
defaultPref("security.ssl.errorReporting.automatic",		false);
defaultPref("security.ssl.errorReporting.url",			"");



/***********
 * Ciphers *
 ***********/

// disable 1024-bit dh primes
defaultPref("security.ssl3.dhe_rsa_aes_128_sha",		false);
defaultPref("security.ssl3.dhe_rsa_aes_256_sha",		false);

// RC4 fallback
defaultPref("security.tls.unrestricted_rc4_fallback",		false);



/***************
 * HTML5 / DOM *
 ***************/

// Service Workers
defaultPref("dom.workers.enabled",				false);
defaultPref("dom.serviceWorkers.enabled",			false);
defaultPref("dom.webnotifications.serviceworker.enabled",	false);

defaultPref("dom.webnotifications.enabled",			false);

defaultPref("dom.webaudio.enabled",		false);

//
defaultPref("dom.indexedDB.enabled",		true);

// Gamepad
defaultPref("dom.gamepad.enabled",		false);

// Vibrator
defaultPref("dom.vibrator.enabled",		false);

// Virtual reality
defaultPref("dom.vr.enabled",			false);
defaultPref("dom.vr.oculus.enabled",		false);
defaultPref("dom.vr.openvr.enabled",		false);
defaultPref("dom.vr.osvr.enabled",		false);

// Battery
defaultPref("dom.battery.enabled",		false);

// Network information
defaultPref("dom.netinfo.enabled",		false);

// Timing
defaultPref("dom.enable_performance",		false);

// User timing
defaultPref("dom.enable_user_timing",		false);

// Raw TCP socket
defaultPref("dom.mozTCPSocket.enabled",		false);	// Hidden option

// WebRTC
defaultPref("media.peerconnection.enabled",	false);

//
defaultPref("media.peerconnection.turn.disable",			true);

// Hide internal IP
defaultPref("media.peerconnection.ice.default_address_only",		true);
defaultPref("media.peerconnection.ice.no_host",				true);

//
defaultPref("media.getusermedia.screensharing.enabled",			false);

//
defaultPref("media.getusermedia.audiocapture.enabled",			false);

//
defaultPref("media.getusermedia.browser.enabled",			false);

//
defaultPref("media.peerconnection.video.enabled",			false);

// Speech synthesis
defaultPref("media.webspeech.synth.enabled",				false);

// Speech recognition
defaultPref("media.webspeech.recognition.enable",			false);

defaultPref("media.navigator.enabled",					false);
defaultPref("media.navigator.video.enabled",				false);

defaultPref("browser.send_pings",					false)
// Here will stand an option
defaultPref("browser.send_pings.require_same_host",			true);

// Beacons
defaultPref("beacon.enabled",						false);

// WebGL
defaultPref("webgl.disabled",						true);
defaultPref("webgl.min_capability_mode",				true);
defaultPref("webgl.disable-extensions",					true);
defaultPref("webgl.disable-fail-if-major-performance-caveat",		true);
defaultPref("webgl.enable-debug-renderer-info",				false);
defaultPref("pdfjs.enableWebGL",					false);



/***********
 * Caching *
 ***********/

// Clean on shutdown
defaultPref("privacy.sanitize.sanitizeOnShutdown",		true);
defaultPref("privacy.sanitize.timeSpan",			0);

// Clean categories on shutdown
defaultPref("privacy.clearOnShutdown.cache",			false);
defaultPref("privacy.clearOnShutdown.cookies",			true);
defaultPref("privacy.clearOnShutdown.downloads",		false);
defaultPref("privacy.clearOnShutdown.formdata",			false);
defaultPref("privacy.clearOnShutdown.history",			false);
defaultPref("privacy.clearOnShutdown.offlineApps",		false);
defaultPref("privacy.clearOnShutdown.passwords",		false);
defaultPref("privacy.clearOnShutdown.sessions",			false);
defaultPref("privacy.clearOnShutdown.siteSettings",		false);
defaultPref("privacy.clearOnShutdown.openWindows",		false);

// Manual clean
defaultPref("privacy.cpd.cache",		true);
defaultPref("privacy.cpd.cookies",		true);
defaultPref("privacy.cpd.downloads",		false);
defaultPref("privacy.cpd.formdata",		false);
defaultPref("privacy.cpd.history",		false);
defaultPref("privacy.cpd.offlineApps",		false);
defaultPref("privacy.cpd.passwords",		false);
defaultPref("privacy.cpd.sessions",		false);
defaultPref("privacy.cpd.siteSettings",		false);
defaultPref("privacy.cpd.openWindows",		false);

// Private browsing mode
defaultPref("browser.privatebrowsing.autostart",	false);

// Offline cache
defaultPref("browser.cache.offline.enable",		false);

// Disk cache
defaultPref("browser.cache.disk.enable",		true);

// Memory cache
defaultPref("browser.cache.memory.enable",		false);

//
defaultPref("browser.cache.disk_cache_ssl",		false);

// Form autofill
defaultPref("browser.formfill.enable",			false);

// Extra session data
defaultPref("browser.sessionstore.privacy_level",	0);

// History
defaultPref("places.history.enabled",			true);

// Cookie lifetime
defaultPref("network.cookie.lifetimePolicy",		2);

//
defaultPref("offline-apps.allow_by_default",		false);

// Visited links
defaultPref("layout.css.visited_links_enabled",		false);



/*****************
 * Miscellaneous *
 *****************/

// disable DNS defaultPrefetch
defaultPref("network.dns.disablePrefetch",		true);

// disable cookies from 3rd parties
defaultPref("network.cookie.cookieBehavior",		1);

//
defaultPref("dom.flyweb.enabled",			false);

//
defaultPref("browser.uitour.enabled",			false);

//
defaultPref("privacy.donottrackheader.enabled",		false);

//
defaultPref("privacy.trackingprotection.enabled",	false);
defaultPref("privacy.trackingprotection.pbmode.enabled",	false);

//
defaultPref("browser.casting.enabled",			false);

//
defaultPref("privacy.userContext.enabled",		false);

// Face detection
defaultPref("camera.control.face_detection.enabled",	false);

// Reading sensors
defaultPref("device.sensors.enabled",			false);

// Geo location
defaultPref("geo.enabled",				false);
defaultPref("geo.wifi.uri",				"");
defaultPref("geo.wifi.logging.enabled",			false);	// Hidden option
defaultPref("geo.wifi.xhr.timeout",			1);
defaultPref("browser.search.geoip.url",			"");
defaultPref("browser.search.geoip.timeout",		1);
defaultPref("browser.search.geoSpecificDefaults",	false);
defaultPref("browser.search.geoSpecificDefaults.url",	"");

// Copy selected contents to clipboard
defaultPref("clipboard.autocopy",			false);

// Keyboard events
defaultPref("dom.keyboardevent.code.enabled",		false);

//
defaultPref("keyword.enabled",				false);

//
defaultPref("browser.urlbar.trimURLs",			false);

//
defaultPref("browser.fixup.alternate.enabled",		false);

//
defaultPref("browser.tabs.closeWindowWithLastTab",	false);

//
defaultPref("dom.event.contextmenu.enabled",		false);

//
defaultPref("browser.ctrlTab.previews",			true);

//
defaultPref("security.insecure_password.ui.enabled",	true);

//
defaultPref("general.buildID.override",			"20100101");

//
defaultPref("browser.display.use_document_fonts",	0);

//
defaultPref("privacy.resistFingerprinting",		true);

// Social
defaultPref("social.remote-install.enabled",		false);
defaultPref("social.share.activationPanelEnabled",	false);
defaultPref("social.toast-notifications.enabled",	false);
defaultPref("social.shareDirectory",			"");
defaultPref("social.whitelist",				"");
defaultPref("social.directories",			"");
defaultPref("social.sidebar.unload_timeout_ms",		1);


defaultPref("signon.rememberSignons",				false);
// try resolving DNS over SOCKS proxies (needed for Tor)
defaultPref("network.proxy.socks_remote_dns",			true);
// disable search suggestions
defaultPref("browser.search.suggest.enabled",			false);
// do not embed the `missing flash player` frame
defaultPref("plugins.notifyMissingFlash",			false);

