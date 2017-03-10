# firefox-hardening

## Overview

This is a collection of some Firefox hardening settings.
It aims to bring a more privacy-focused browsing experience.

This package can be installed from the AUR: [firefox-hardening](https://aur.archlinux.org/packages/firefox-hardening/)

Changes are done by placing a configuration file in `/usr/lib/firefox/browser/defaults/preferences/` 
next to `vendor.js` which overwrites some default settings system-wide.

Also plugins, that are installed by default will be removed.

## Changes to the default configuration
 * disable geolocation
 * disable battery API
 * disable cookies from 3rd parties
 * delete cookies when Firefox is closed
 * deactivate weak TLS ciphers
 * disable telemetry
 * enable Do Not Track
 * disable safebrowsing
 * disable WebGL
 * enable tracking protection
 * disable DNS prefetch
 * disable search suggestions
 * disable WebRTC
 * use hardcoded useragent

