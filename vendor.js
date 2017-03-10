// Use LANG environment variable to choose locale
pref("intl.locale.matchOS",								true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser",				false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes",					11);
pref("extensions.shownSelectionUI",						true);

// Opt all of us into e10s, instead of just 50%
pref("browser.tabs.remote.autostart",					true);


// disable geolocation
pref("geo.enabled",										false);
pref("browser.newtabpage.enhanced",						false);
pref("datareporting.healthreport.uploadEnabled",		false);
pref("datareporting.healthreport.service.enabled",		false);
pref("datareporting.policy.dataSubmissionEnabled",		false);
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
pref("extensions.pocket.enabled",						false);
// disable 1024-bit dh primes
pref("security.ssl3.dhe_rsa_aes_128_sha",				false);
pref("security.ssl3.dhe_rsa_aes_256_sha",				false);
// disable telemetry
pref("toolkit.telemetry.enabled",						false);
// enable Do Not Track
pref("privacy.donottrackheader.enabled",				true);
// disable safebrowsing
pref("browser.safebrowsing.malware.enabled",			false);
pref("browser.safebrowsing.phishing.enabled",			false);
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
