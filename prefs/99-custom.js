/**********************
 * Firefox components *
 **********************/

// Health reports
pref("datareporting.healthreport.uploadEnabled",		false);
pref("datareporting.healthreport.service.enabled",		false);
pref("datareporting.policy.dataSubmissionEnabled",		false);
pref("datareporting.healthreport.about.reportUrl",		"");

// Telemetry
pref("toolkit.telemetry.enabled",				false);
pref("toolkit.telemetry.unified",				false);

//
pref("toolkit.telemetry.server",				"");

// Telemetry experiments
pref("experiments.supported",					false);
pref("experiments.enabled",					false);

//
pref("experiments.manifest.uri",				"");

// Pocket
pref("extensions.pocket.enabled",				false);

// Suggested sites
pref("browser.newtabpage.enhanced",				false);

// Download SafeBrowsing lists
pref("browser.safebrowsing.downloads.remote.enabled",		false);

// Safe browsing
pref("browser.safebrowsing.malware.enabled",			false);
pref("browser.safebrowsing.phishing.enabled",			false);
pref("browser.safebrowsing.downloads.enabled",			false);

// Heartbeat
pref("browser.selfsupport.url",					"");

// WebIDE
pref("devtools.webide.enabled",					false);
pref("devtools.webide.autoinstallADBHelper",			false);
pref("devtools.webide.autoinstallFxdtAdapters",			false);

// Remote debugging
pref("devtools.debugger.remote-enabled",			false);



/**************
 * Extensions *
 **************/

// Extension updates
pref("extensions.update.enabled",				true);

// Extension block list
pref("extensions.blocklist.enabled",				true);

// Extension metadata update
pref("extensions.getAddons.cache.enabled",			false);

// Click to play
pref("plugins.click_to_play",					true);

// Flash
pref("plugin.state.flash",					0);

// Java
pref("plugin.state.java",					0);

// Gnome Shell integration
pref("plugin.state.libgnome-shell-browser-plugin",		0);



/****************
 * Cryptography *
 ****************/

// TLS versions
pref("security.tls.version.min",				1);
pref("security.tls.version.max",				4);

// TLS version fallback
pref("security.tls.version.fallback-limit",			3);

// Session tickets
pref("security.ssl.disable_session_identifiers",		true);

// OCSP
pref("security.OCSP.enabled",					1);

// OCSP stapling
pref("security.ssl.enable_ocsp_stapling",			true);

//
pref("security.cert_pinning.enforcement_level",			2);

// SSL error reporting
pref("security.ssl.errorReporting.enabled",			false);

//
pref("security.ssl.errorReporting.automatic",			false);

//
pref("security.ssl.errorReporting.url",				"");



/***********
 * Ciphers *
 ***********/

// RC4
pref("security.ssl3.rsa_rc4_128_md5",				false);
pref("security.ssl3.rsa_rc4_128_sha",				false);
pref("security.ssl3.ecdh_ecdsa_rc4_128_sha",			false);
pref("security.ssl3.ecdh_rsa_rc4_128_sha",			false);
pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha",			false);
pref("security.ssl3.ecdhe_rsa_rc4_128_sha",			false);

// disable 1024-bit dh primes
pref("security.ssl3.dhe_rsa_aes_128_sha",				false);
pref("security.ssl3.dhe_rsa_aes_256_sha",				false);

// RC4 fallback
pref("security.tls.unrestricted_rc4_fallback",			false);



/***************
 * HTML5 / DOM *
 ***************/

//
pref("dom.indexedDB.enabled",					false);

// Gamepad
pref("dom.gamepad.enabled",					false);

// Vibrator
pref("dom.vibrator.enabled",					false);

// Virtual reality
pref("dom.vr.enabled",						false);
pref("dom.vr.oculus.enabled",					false);
pref("dom.vr.openvr.enabled",					false);
pref("dom.vr.osvr.enabled",					false);

// Battery
pref("dom.battery.enabled",					false);

// Network information
pref("dom.netinfo.enabled",					false);

// Timing
pref("dom.enable_performance",					false);

// User timing
pref("dom.enable_user_timing",					false);

// Telephony
pref("dom.telephony.enabled",					false);

// Raw TCP socket
pref("dom.mozTCPSocket.enabled",				false);

// WebRTC
pref("media.peerconnection.enabled",				false);

//
pref("media.peerconnection.turn.disable",			true);

// Hide internal IP
pref("media.peerconnection.ice.default_address_only",		true);
pref("media.peerconnection.ice.no_host",			true);

//
pref("media.getusermedia.screensharing.enabled",		false);

//
pref("media.getusermedia.audiocapture.enabled",			false);

//
pref("media.getusermedia.browser.enabled",			false);

//
pref("media.peerconnection.video.enabled",			false);

// Speech synthesis
pref("media.webspeech.synth.enabled",				false);

// Speech recognition
pref("media.webspeech.recognition.enable",			false);

pref("media.navigator.enabled",					false);

pref("browser.send_pings",					false)
pref("browser.send_pings.require_same_host",			true);

// Beacons
pref("beacon.enabled",						false);

// WebGL
pref("webgl.disabled",						true);
pref("webgl.min_capability_mode",				true);
pref("webgl.disable-extensions",				true);
pref("webgl.disable-fail-if-major-performance-caveat",		true);
pref("webgl.enable-debug-renderer-info",			false);
pref("pdfjs.enableWebGL",					false);



/***********
 * Caching *
 ***********/

// Clean on shutdown
pref("privacy.sanitize.sanitizeOnShutdown",			true);

// Clean areas
pref("privacy.clearOnShutdown.cache",				false);
pref("privacy.clearOnShutdown.cookies",				true);
pref("privacy.clearOnShutdown.downloads",			false);
pref("privacy.clearOnShutdown.formdata",			false);
pref("privacy.clearOnShutdown.history",				false);
pref("privacy.clearOnShutdown.offlineApps",			false);
pref("privacy.clearOnShutdown.passwords",			false);
pref("privacy.clearOnShutdown.sessions",			false);
pref("privacy.clearOnShutdown.siteSettings",			false);

// Private browsing mode
pref("browser.privatebrowsing.autostart",			false);

// Offline cache
pref("browser.cache.offline.enable",				false);

//
pref("network.http.use-cache",					true);

// Disk cache
pref("browser.cache.disk.enable",				true);

// Memory cache
pref("browser.cache.memory.enable",				false);

// 
pref("browser.cache.disk_cache_ssl",				false);

// Form autofill
pref("browser.formfill.enable",					false);

// Extra session data
pref("browser.sessionstore.privacy_level",			0);

// History
pref("places.history.enabled",					true);

// Cookie lifetime
pref("network.cookie.lifetimePolicy",				2);

//
pref("offline-apps.allow_by_default",				false);

//
pref("offline-apps.quota.max",					0);


/*****************
 * Miscellaneous *
 *****************/

// Face detection
pref("camera.control.face_detection.enabled",			false);

// Reading sensors
pref("device.sensors.enabled",					false);

// Geo location
pref("geo.enabled",						false);
pref("geo.wifi.url",						"");
pref("browser.search.geoip.url",				"");

//
pref("keyword.enabled",						false);

//
pref("browser.urlbar.trimURLs",					false);

//
pref("browser.fixup.alternate.enabled",				false);

//
pref("social.whitelist",					"");

//
pref("social.remote-install.enabled",				false);

//
pref("social.toast-notifications.enabled",			false);


pref("clipboard.autocopy",								false);
// disable cookies from 3rd parties
pref("network.cookie.cookieBehavior",					1);
pref("signon.rememberSignons",							false);
// enable Do Not Track
pref("privacy.donottrackheader.enabled",				true);
// enable tracking protection
// https://support.mozilla.org/t5/Protect-your-privacy/Tracking-Protection-in-Firefox/ta-p/18255
pref("privacy.trackingprotection.enabled",				true);
// disable DNS prefetch
pref("network.dns.disablePrefetch",						true);
// do not remember visited links
pref("layout.css.visited_links_enabled",				false);
// try resolving DNS over SOCKS proxies (needed for Tor)
pref("network.proxy.socks_remote_dns",					true);
// disable search suggestions
pref("browser.search.suggest.enabled",					false);
// do not embed the `missing flash player` frame
pref("plugins.notifyMissingFlash",						false);
// set the useragent to the same one used by the Tor browser
pref("general.useragent.override",						"Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0");
// set the platform to the same one used by the Tor browser
pref("general.platform.override",						"Win32");
