/* eslint-disable no-console */
const { colours } = require('leeks.js');
const figlet = require('figlet');
const link = require('terminal-link');

module.exports = version => colours.cyan(figlet.textSync('Discord', { font: 'Banner3' })) +
	colours.cyan('\n\n' + figlet.textSync('Tickets', { font: 'Banner3' })) +
	colours.cyanBright(`\nDiscord Tickets bot v${version} by eartharoid from foxco-network.de`) +
	'\n\n';
