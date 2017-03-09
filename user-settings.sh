#!/usr/bin/env bash
# This script writes some privacy settings into a firefox profile
# The `prefs.js` file inside a firefox profile direcotry stores
# user defined settings.
# created: 2017-03-09
# author: Valentin Brandl

# exit on error
set -e

# find the default firefox profile
function find_default_profile {
	source <(grep = ${HOME}/.mozilla/firefox/profiles.ini)
	echo "${HOME}/.mozilla/firefox/${Path}/"
}

# write a setting to the firefox profile
# params: setting_name, value, type
# type has to be "string", "bool" or "int"
function write_setting {
	local setting="user_pref(\"${1}\", "
	case ${3} in
		string)
			setting="${setting}\"${2}\");"
			;;
		bool|int)
			setting="${setting}${2});"
			;;
		*)
			echo "Invalid type `${3}`"
			exit 1
	esac
	echo ${setting} | tee -a ${PROFILE_PATH}/prefs.js
}

function usage {
	echo "${NAME} ${VERSION}"
	echo "Usage:"
	echo "  -h | --help"
	echo "    Print this help message"
	echo "  -p | --profile"
	echo "    Path to the firefox profile"
	echo "    Default: extracted from \$HOME/.mozilla/firefox/profiles.ini"
	exit 0
}

NAME="Firefox privacy script"
VERSION=0.1
PROFILE_PATH=$(find_default_profile)
SHORT_OPTIONS="hp:"
LONG_OPTIONS="help,profile:"

params="$(getopt -o ${SHORT_OPTIONS} -l ${LONG_OPTIONS} -- "${@}")"

if [ $? -ne 0 ]
then
	usage
fi

eval set -- "${params}"
unset params

while true
do
	case $1 in
		-h|--help)
			usage
			;;
		-p|--profile)
			PROFILE_PATH=(${2-})
			shift 2
			;;
		--)
			shift
			break
			;;
		*)
			usage
			;;
	esac
done

write_setting "geo.enabled" "false" "bool"
# vim: set filetype=sh ts=4 sw=4 tw=0 noet :
