// Use LANG environment variable to choose locale
pref("intl.locale.matchOS",				true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser",		false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes",			11);
pref("extensions.shownSelectionUI",			true);

// Opt all of us into e10s, instead of just 50%
pref("browser.tabs.remote.autostart",			true);


pref("geo.enabled",					false);
pref("browser.newtabpage.enhanced",			false);
pref("datareporting.healthreport.uploadEnabled",	false);
pref("datareporting.healthreport.service.enabled",	false);
pref("datareporting.policy.dataSubmissionEnabled",	false);
pref("camera.control.face_detection.enabled",		false);
pref("dom.gamepad.enabled",				false);
pref("dom.vr.enabled",					false);
pref("device.sensors.enabled",				false);
pref("dom.battery.enabled",				false);
pref("media.peerconnection.enabled",			false);
pref("browser.send_pings",				false);
pref("browser.send_pings.require_same_host",		true);
pref("clipboard.autocopy",				false);
pref("network.cookie.lifetimePolicy",			2);
pref("signon.rememberSignons",				false);
pref("extensions.pocket.enabled",			false);
