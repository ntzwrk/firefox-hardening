#!/usr/bin/env bash

FF_DIR="/usr/lib/firefox/browser"
FH_DIR="/usr/lib/firefox-hardening/"

SYSTEM_ADDONS_DIR=${FF_DIR}/features
SYSTEM_ADDONS="firefox@getpocket.com.xpi webcompat@mozilla.org.xpi aushelper@mozilla.org.xpi"

SYSTEM_PREFS_DIR=${FF_DIR}/defaults/preferences
CUSTOM_CONFIGS="99-custom.js"

if [ -d ${FF_DIR} ]; then
	for ADDON in ${SYSTEM_ADDONS}; do
		if [ -f ${SYSTEM_ADDONS_DIR}/${ADDON} ]; then
			rm ${SYSTEM_ADDONS_DIR}/${ADDON}
		fi
	done

	for CONFIG in ${CUSTOM_CONFIGS}; do
		if [ ! -L ${SYSTEM_PREFS_DIR}/${CONFIG} ]; then
			ln -s ${FH_DIR}/prefs/${CONFIG} ${SYSTEM_PREFS_DIR}/${CONFIG}
		fi
	done
fi
