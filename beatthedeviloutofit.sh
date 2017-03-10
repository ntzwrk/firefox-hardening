#!/usr/bin/env bash

FF_DIR="/usr/lib/firefox/browser"
FH_DIR="/usr/lib/firefox-hardening/"

SYSTEM_ADDONS_DIR=${FF_DIR}/features
SYSTEM_ADDONS="firefox@getpocket.com.xpi webcompat@mozilla.org.xpi aushelper@mozilla.org.xpi"

SYSTEM_PREFS_DIR=${FF_DIR}/defaults/preferences/

for ADDON in ${SYSTEM_ADDONS}; do
	if [ -f ${SYSTEM_ADDONS_DIR}/${ADDON} ]; then
		rm ${SYSTEM_ADDONS_DIR}/${ADDON}
	fi
done

if [ -d ${SYSTEM_PREFS_DIR} ]; then
	cp ${FH_DIR}/prefs/* ${SYSTEM_PREFS_DIR}/
fi
