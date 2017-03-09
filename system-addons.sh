#!/bin/bash

SYSTEM_ADDONS_DIR="/usr/lib/firefox/browser/features"
SYSTEM_ADDONS="firefox@getpocket.com.xpi webcompat@mozilla.org.xpi aushelper@mozilla.org.xpi"

for ADDON in ${SYSTEM_ADDONS}; do
	if [ -f ${SYSTEM_ADDONS_DIR}/${ADDON} ]; then
		rm ${SYSTEM_ADDONS_DIR}/${ADDON}
	fi
done
