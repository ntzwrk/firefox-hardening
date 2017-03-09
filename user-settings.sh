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

# values from https://wiki.archlinux.org/index.php/Firefox/Privacy
# disable geolocation
write_setting "geo.enabled" "false" "bool"
# enable tracking protection
# https://support.mozilla.org/t5/Protect-your-privacy/Tracking-Protection-in-Firefox/ta-p/18255
write_setting "privacy.trackingprotection.enabled" "true" "bool"
# set the useragent to the same one used by the Tor browser
write_setting "general.useragent.override" "Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0" "string"
# set the platform to the same one used by the Tor browser
write_setting "general.platform.override" "Win32" "string"
# disable battery api
write_setting "dom.battery.enabled" "false" "bool"
# disable WebRTC
write_setting "media.peerconnection.ice.default_address_only" "true" "bool"
write_setting "media.peerconnection.enabled" "false" "bool"
# disable 1024-bit dh primes
write_setting "security.ssl3.dhe_rsa_aes_128_sha" "false" "bool"
write_setting "security.ssl3.dhe_rsa_aes_256_sha" "false" "bool"
# disable telemetry
write_setting "toolkit.telemetry.enabled" "false" "bool"
# enable Do Not Track
write_setting "privacy.donottrackheader.enabled" "true" "bool"
# disable safebrowsing
write_setting "browser.safebrowsing.malware.enabled" "false" "bool"
write_setting "browser.safebrowsing.phishing.enabled" "false" "bool"
# disable WebGL
write_setting "webgl.disabled" "true" "bool"


# disable DNS prefetch
write_setting "network.dns.disablePrefetch" "true" "bool"
# disable cookies from 3rd parties
write_setting "network.cookie.cookieBehavior" "1" "int"
# keep cookies until Firefox is closed
write_setting "network.cookie.lifetimePolicy" "2" "int"
write_setting "network.cookie.prefsMigrated" "true" "bool"
# do not remember visited links
write_setting "layout.css.visited_links_enabled" "false" "bool"
# try resolving DNS over SOCKS proxies (needed for Tor)
write_setting "network.proxy.socks_remote_dns" "true" "bool"
# use `localhost` as URL for WiFi locating
write_setting "geo.wifi.url" "localhost" "string"
# disable search suggestions
write_setting "browser.search.suggest.enabled" "false" "bool"
# do not embed the `missing flash player` frame
write_setting "plugins.notifyMissingFlash" "false" "bool"
# vim: set filetype=sh ts=4 sw=4 tw=0 noet :
