Package.describe({
    summary: "cordova plugin contacts integration in meteor",
    version: "1.0.0",
    name: "particle4dev:contacts",
    git: "https://github.com/particle4dev/cordova-plugin-contacts.git"
});

// meteor test-packages ./
// https://github.com/meteor/mobile-packages/tree/master/packages/mdg:geolocation

// check version
// http://plugins.cordova.io/#/search?search=contacts
// https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md

var both        = ['client', 'server'];
var client      = ['client'];
var server      = ['server'];
var cordova     = ['web.cordova'];
var browser     = ['web.browser'];

Cordova.depends({
    'org.apache.cordova.contacts': '0.2.15'
});

Package.on_use(function(api) {
    api.versionsFrom('1.0');

    // import packages
    api.use(['underscore'], both);

    // add files
    // api.add_files('facebook_server.js', server);
    // api.add_files('facebook.js', 'web');

    // if (typeof api.export !== 'undefined') {
        // api.export('CRON', ['server']);
    // }
});

Package.on_test(function (api) {
    api.use(['test-helpers', 'tinytest', 'particle4dev:contacts']);

    api.add_files([
        'tests/test.js',
    ], browser);
});
