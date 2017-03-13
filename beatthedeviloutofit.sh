#!/usr/bin/env bash

FFH_DIR="/usr/lib/firefox-hardening"
FFH_CONFIG_DIR="/etc/firefox-hardening"

FF_DIR="/usr/lib/firefox"
FF_SYS_ADDONS_DIR="${FF_DIR}/browser/features"

if [ -f ${FFH_CONFIG_DIR}/ffh.conf ]; then
	source ${FFH_CONFIG_DIR}/ffh.conf
else
	exit 1
fi

if [ -d ${FF_DIR} ]; then
	for ADDON in ${REMOVE_SYS_ADDONS}; do
		if [ -f ${FF_SYS_ADDONS_DIR}/${ADDON} ]; then
			rm ${FF_SYS_ADDONS_DIR}/${ADDON}
		fi
	done

	echo "//" > ${FF_DIR}/custom.cfg

	for CONFIG in ${ENABLED_FFH_CONFIGS}; do
		if [ -f ${FFH_DIR}/prefs/${CONFIG} ]; then
			cat ${FFH_DIR}/prefs/${CONFIG} >> ${FF_DIR}/custom.cfg
		fi
	done

	for CONFIG in ${ENABLED_OWN_CONFIGS}; do
		if [ -f ${FFH_CONFIG_DIR}/prefs/${CONFIG} ]; then
			cat ${FFH_CONFIG_DIR}/prefs/${CONFIG} >> ${FF_DIR}/custom.cfg
		fi
	done

	chmod 644 ${FF_DIR}/custom.cfg

	ln -sf ${FFH_DIR}/prefs/autoconfig.js ${FF_DIR}/defaults/pref/autoconfig.js
fi
