// ==UserScript==
// @name        poczta.orange.pl expander
// @namespace   github/kplacze
// @include     http://www.orange.pl/portal/map/map/pim_email*
// @include     https://www.orange.pl/portal/map/map/pim_email*
// @version     1
// @grant       none
// ==/UserScript==
document.location.href = document.querySelector('#center div a').href;
