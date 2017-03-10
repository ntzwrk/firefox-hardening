/**********************
 * Firefox components *
 **********************/

// Health reports
pref("datareporting.healthreport.uploadEnabled",                false);
pref("datareporting.healthreport.service.enabled",              false);
pref("datareporting.policy.dataSubmissionEnabled",		false);

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



/****************
 * Cryptography *
 ****************/

// TLS versions
pref("security.tls.version.min",				1);
pref("security.tls.version.max",				4);

// TLS version fallback
pref("security.tls.version.fallback-limit",			3);

// OCSP
pref("security.OCSP.enabled",					1);

// OCSP stapling
pref("security.ssl.enable_ocsp_stapling",			true);

// SSL error reporting
pref("security.ssl.errorReporting.automatic",			false);



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

// RC4 fallback
pref("security.tls.unrestricted_rc4_fallback",			false);




// disable geolocation
pref("geo.enabled",										false);
pref("camera.control.face_detection.enabled",			false);
pref("dom.gamepad.enabled",								false);
pref("dom.vr.enabled",									false);
pref("device.sensors.enabled",							false);
// disable battery api
pref("dom.battery.enabled",								false);
pref("media.peerconnection.enabled",					false);
pref("browser.send_pings",								false);
pref("browser.send_pings.require_same_host",			true);
pref("clipboard.autocopy",								false);
// disable cookies from 3rd parties
pref("network.cookie.cookieBehavior",					1);
// keep cookies until Firefox is closed
pref("network.cookie.lifetimePolicy",					2);
pref("signon.rememberSignons",							false);
// disable 1024-bit dh primes
pref("security.ssl3.dhe_rsa_aes_128_sha",				false);
pref("security.ssl3.dhe_rsa_aes_256_sha",				false);
// disable telemetry
pref("toolkit.telemetry.enabled",						false);
// enable Do Not Track
pref("privacy.donottrackheader.enabled",				true);
// disable WebGL
pref("webgl.disabled",									true);
// enable tracking protection
// https://support.mozilla.org/t5/Protect-your-privacy/Tracking-Protection-in-Firefox/ta-p/18255
pref("privacy.trackingprotection.enabled",				true);
// disable DNS prefetch
pref("network.dns.disablePrefetch",						true);
// do not remember visited links
pref("layout.css.visited_links_enabled",				false);
// try resolving DNS over SOCKS proxies (needed for Tor)
pref("network.proxy.socks_remote_dns",					true);
// use `localhost` as URL for WiFi locating
pref("geo.wifi.url",									"localhost");
// disable search suggestions
pref("browser.search.suggest.enabled",					false);
// do not embed the `missing flash player` frame
pref("plugins.notifyMissingFlash",						false);
// disable WebRTC
pref("media.peerconnection.ice.default_address_only",	true);
pref("media.peerconnection.enabled",					false);
// set the useragent to the same one used by the Tor browser
pref("general.useragent.override",						"Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0");
// set the platform to the same one used by the Tor browser
pref("general.platform.override",						"Win32");
