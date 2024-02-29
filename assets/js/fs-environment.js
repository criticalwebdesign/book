"use strict";

/**
 *  Title: Environment Functions
 *  Originally published in Tally Saves the Internet
 *  Author: Owen Mundy
 *  Date: 2021
 *  License: MIT
 */

var Environment = (function() {
	// PRIVATE


   /**
	 *  Get location
	 */
	async function getLocation() {
		try {
            return fetch('http://www.geoplugin.net/json.gp', {mode: 'no-cors'})
                .then(resp => resp.json())
                .then(data => {
				console.log("Install.getLocation()", JSON.stringify(data, null, 2));
				return {
					ip: data.geoplugin_request,
					city: data.geoplugin_city,
					region: data.geoplugin_region,
					country: data.geoplugin_countryName,
					continent: data.geoplugin_continentName,
					lat: data.geoplugin_latitude,
					lng: data.geoplugin_longitude,
					timezone: data.geoplugin_timezone
				};
			});
		} catch (err) {
			console.error(err);
		}
	}

	// 🔋
	async function getBattery() {
		return navigator.getBattery().then((battery) => {
			let level = Math.floor(battery.level * 100);
            let charging = battery.charging;
            return {level,charging}
		});
	}

	async function getBrowserName() {
		try {
			// check brave, then opera first
			if (navigator.brave && await navigator.brave.isBrave()) {
				return "Brave";
			} else if (navigator.userAgent.match(/Opera|OPR\//)) {
				return "Opera";
			} else if (navigator.userAgent.indexOf("Chrome") != -1) {
				return "Chrome";
			} else if (navigator.userAgent.indexOf("MSIE") != -1) {
				return "IE";
			} else if (navigator.userAgent.indexOf("Firefox") != -1) {
				return "Firefox";
			} else {
				return false;
			}
		} catch (err) {
			console.error(err);
		}
	}


	function getBrowserLanguage(){
		let lang = "";
		if (navigator.languages.length > 0)
			lang = navigator.languages[0];
		return lang;
	}
	function getPlatform(){
		let os = navigator.platform || "",
			nAgt = navigator.userAgent;
		var clientStrings = [
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows ME', r: /Windows ME/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
		for (var id in clientStrings) {
			if (clientStrings.hasOwnProperty(id)) {
				var cs = clientStrings[id];
				if (cs.r.test(nAgt)) {
					os = cs.s;
					break;
				}
			}
		}
		// get osVersion
		var osVersion = "";
		if (/Windows/.test(os)) {
			osVersion = /Windows (.*)/.exec(os)[1];
			os = 'Windows';
		}
		switch (os) {
			case 'Mac OS X':
				osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
				break;

			case 'Android':
				osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
				break;

			case 'iOS':
				osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nAgt);
				osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
				break;
		}
		return os +" "+ osVersion;
	}



	/*************************** EXTRACT FROM URL *******************************/

	/**
	 *	Break a url into its parts. Each section is removed from original url
	 */
	function extractUrl(url){
		try {
			let log = "🤔 separateParts()",
				DEBUG = false,
				obj = {
					url: url,
					protocol: '', // https
					host: '', // news.google.com
					subdomain: '', // news
					domain: '', // google.com
					sld: '', // google
					tld: '', // com
					port: '', // 5000
					path: '', // home/stuff/file.html
					filename: '', // file.html
					extension: '', // .html
					query: '', // p=1
					fragment: '', // #anchor (w/o #)
				},
				temp = [];

			if (DEBUG) console.log(`${log} ${url}`);


			// protocol (http, ftp, etc.)
			if (url.indexOf("://") > -1) {
				temp = url.split('://');
				obj.protocol = temp[0];
				url = temp[1];
			}
			if (DEBUG) console.log(`${log} ${url} protocol = ${obj.protocol}`);

			// fragment
			if (url.indexOf("#") > -1) {
				temp = url.split('#');
				obj.fragment = temp[1];
				url = temp[0];
			}
			if (DEBUG) console.log(`${log} ${url} fragment = ${obj.fragment}`);

			// query
			if (url.indexOf("?") > -1) {
				temp = url.split('?');
				obj.query = temp[1];
				url = temp[0];
			}
			if (DEBUG) console.log(`${log} ${url} query = ${obj.query}`);

			// path
			if (url.indexOf("/") > -1) {
				// split first from others []
				let [first, ...others] = url.split('/');
				obj.host = first;
				// rejoin
				obj.path = others.join('/');
				url = first;
			}
			if (DEBUG) console.log(`${log} ${url} path = ${obj.path}`);

			// port
			if (url.indexOf(":") > -1) {
				temp = url.split(':');
				obj.port = temp[1];
				url = temp[0];
			}
			if (DEBUG) console.log(`${log} ${url} port = ${obj.port}`);


			// EXTRACT PATH PARTS

			if (obj.path !== "") {
				// filename - if last part of path has a period
				if (obj.path.slice(-8).indexOf(".") > -1) {
					if (obj.path.indexOf("/") > -1) {
						temp = obj.path.split("/");
						obj.filename = temp[temp.length-1];
					} else {
						obj.filename = obj.path;
					}
				}
				if (DEBUG) console.log(`${log} ${url} filename = ${obj.filename}`);

				// file extension
				if (obj.filename.indexOf(".") > -1) {
					obj.extension = obj.filename.split(".")[1];
				}
				if (DEBUG) console.log(`${log} ${url} extension = ${obj.extension}`);
			}

			// EXTRACT HOST PARTS

			// host
			if (url.indexOf(".") > -1) {
				obj.host = url;
			}
			if (DEBUG) console.log(`${log} ${url} host = ${obj.host}`);

			// domain, subdomain, tld, sld
			if (obj.host.indexOf(".") > -1) {
				temp = obj.host.split(".");
				obj.domain = temp.slice(-2).join(".");
				obj.subdomain = temp.slice(0,temp.length-2).join(".");
				obj.tld = temp[temp.length-1];
				obj.sld = temp[temp.length-2];
			}
			// localhost?
			else if (obj.host !== ""){
				obj.sld = obj.host;
				obj.domain = obj.host;
			}
			if (DEBUG) console.log(`${log} ${url} domain = ${obj.domain}`);
			if (DEBUG) console.log(`${log} ${url} subdomain = ${obj.subdomain}`);
			if (DEBUG) console.log(`${log} ${url} sld = ${obj.sld}`);
			if (DEBUG) console.log(`${log} ${url} tld = ${obj.tld}`);


			if (DEBUG) console.log(`${log} -> ${JSON.stringify(obj)}`);
			return obj;
		} catch (err) {
			console.error(err);
		}
	}



	// PUBLIC
    return {
        getLocation:getLocation,
        getBattery:getBattery,
		getBrowserName: getBrowserName,
		getBrowserLanguage: getBrowserLanguage,
		getPlatform: getPlatform,
		extractUrl: extractUrl,
	};
})();

// if running in node, then export module
if (typeof process === 'object') module.exports = Environment;
// otherwise add as "global" object window for browser / extension
else window.Environment = Environment;
