#!/usr/bin/env bash
# This script downloads a Firefox addon
# and installs it systemwide
# TODO check if systemwide plugins can get updated
#	a workaround would be to place the addons in
#	`/usr/lib/firefox/browser/features`
#	but this wouldn't work for existing profiles but the user
#	would be questioned for each addon if he wants to install
#	the addon in the new profile

# exit on error
set -e

function clean_up {
	rm -rf ${TMP_DIR}
}

function get_addon_id {
	local id_line=`unzip -p ${1} install.rdf | egrep '<em:id>' -m 1`
	local id=`echo ${id_line} | sed "s/.*>\(.*\)<.*/\1/"`
	echo ${id}
}

function get_addon_name {
	local name_line=`unzip -p ${1} install.rdf | egrep '<em:name>' -m 1`
    local name=`echo ${name_line} | sed "s/.*>\(.*\)<.*/\1/"`
    echo "${name}"
}

trap clean_up EXIT

TMP_DIR=`mktemp -p /tmp -d ffplugin_XXXXXXXXXX`
PLUGIN_URL=${1}
PLUGIN_NAME=${PLUGIN_URL##*/}
EXTENSIONS_SYSTEM='/usr/lib/firefox/browser/extensions/'

wget -P ${TMP_DIR} ${PLUGIN_URL}
addon_id=`get_addon_id ${TMP_DIR}/${PLUGIN_NAME}`
addon_name=`get_addon_name ${TMP_DIR}/${PLUGIN_NAME}`
if [ -f "${EXTENSIONS_SYSTEM}${addon_id}.xpi" ]
then
	echo "Addon ${addon_name} already exists"
else
	sudo cp ${TMP_DIR}/${PLUGIN_NAME} "${EXTENSIONS_SYSTEM}${addon_id}.xpi"
fi
