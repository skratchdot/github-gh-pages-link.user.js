// ==UserScript==
// @name           GitHub: gh-pages Link
// @namespace      https://github.com/skratchdot/github-gh-pages-link.user.js
// @description    If a repository has a gh-pages branch, then this will add links to the Github Page, as well as the gh-page source code.
// @include        https://github.com/*
// @match          https://github.com/*
// @require        https://gist.github.com/skratchdot/5604120/raw/_init.js
// @require        https://gist.github.com/skratchdot/5604120/raw/gh-pages-link.js
// @run-at         document-end
// @grant          none
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-gh-pages-link.user.js/raw/master/github-gh-pages-link.user.js
// @updateURL      https://github.com/skratchdot/github-gh-pages-link.user.js/raw/master/github-gh-pages-link.user.js
// @version        1.3
// ==/UserScript==
/*global SKRATCHDOT, document */

// This code is only going to run for browsers that don't support
// the @require annotation when executing userscripts.
if ('undefined' === typeof SKRATCHDOT) {
	var addScript = function (src) {
		'use strict';
		var script = document.createElement('script');
		script.src = src;
		document.body.appendChild(script);
		document.body.removeChild(script);
	};

	// Required by: repo-filter-info
	addScript('https://gist.github.com/skratchdot/5604120/raw/gh-pages-link.js');
}