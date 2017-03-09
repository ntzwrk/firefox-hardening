#!/usr/bin/env bash
# This script writes some privacy settings into a Firefox profile
# The `prefs.js` file inside a Firefox profile directory stores
# user defined settings.
# created: 2017-03-09
# author: Valentin Brandl

# find the default Firefox profile
function find_default_profile {
	if [ -e ${HOME}/.mozilla/firefox/profiles.ini ]
	then
		# hacky way to read settings from profile.ini since the format is
		#   Key=Value
		# just like in bash
		# TODO: do better (ini parser?)
		source <(grep = ${HOME}/.mozilla/firefox/profiles.ini)
		echo "${HOME}/.mozilla/firefox/${Path}/"
	else
		echo ""
	fi
}

# write a setting to the Firefox profile
# params: setting_name, value, type
# type has to be "string", "bool" or "int"
function write_setting {
	local setting="user_pref(\"${1}\", "
	case "${3}" in
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

function print_version {
	echo "${NAME} ${VERSION}"
}

function usage {
	print_version
	echo "Usage:"
	echo "  -h | --help"
	echo "    Print this help message"
	echo "  -p | --profile"
	echo "    Path to the Firefox profile"
	echo "    Default: extracted from \$HOME/.mozilla/firefox/profiles.ini"
	echo "  -v | --version"
	echo "    Print version and exit"
	exit 0
}

NAME="Firefox user settings script"
VERSION=0.1
SHORT_OPTIONS="hp:v"
LONG_OPTIONS="help,profile:,version"

params="$(getopt -o ${SHORT_OPTIONS} -l ${LONG_OPTIONS} -- "${@}")"

# exit on error
# set this after getopt so the usage dialog gets printed if getopt fails
set -e

if [ $? -ne 0 ]
then
	usage
fi

eval set -- "${params}"
unset params

PROFILE_PATH=$(find_default_profile)

while true
do
	case "$1" in
		-h|--help)
			usage
			;;
		-p|--profile)
			PROFILE_PATH=(${2-})
			shift 2
			;;
		-v|--version)
			print_version
			exit
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

if [ "${PROFILE_PATH}" == "" ]
then
	echo "Could not find default profile. Please use -p flag"
	echo "You might need to run Firefox at least once to create a profile"
	exit 1
fi

write_setting "geo.enabled" "false" "bool"
# vim: set filetype=sh ts=4 sw=4 tw=0 noet :
