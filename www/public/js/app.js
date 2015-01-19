'use strict';

(function(window, document) {


    var angular;

    // jQuery
    window.jQuery = require('jquery');

    // var key = require('keymaster')
    // console.log(key)
    // key('shift+return', function(){ alert('stopped reload!'); return false });

    // AngularJS
    angular = require('exports?angular!angular');
    // angular = require('angular')

    // // Angular Route
    require('angular-route');
    
    // // Angular Bootstrap UI
    require('angular-bootstrap');

    var ace = require('brace');
    require('brace/mode/markdown');

    // Base
    require('./base/base.controller');
    require('./components/document-title.directive');
    require('./components/toggle-menu.directive');
    require('./components/toggle-settings.directive');
    require('./components/toggle-preview.directive');
    require('./components/switch.directive');
    require('./components/preview.directive');

    // Craft
    require('./services/craft.service')
    require('./project/project.service')

    require('./components/wtfisdillinger-modal.controller');

    // User
    require('./user/user.controller');
    require('./services/user.service');

    // Documents
    require('./factorys/sheet.factory');
    require('./services/documents.service');
    require('./services/documents.export.service');
    require('./documents/documents-export.controller');
    require('./documents/documents.controller');
    require('./services/wordscount.service');

    // Plugin: Github
    require('./plugins/github/github.service');
    require('./plugins/github/github-modal.controller');
    require('./plugins/github/github.controller');

    // Plugin: Dropbox
    require('./plugins/dropbox/dropbox.service');
    require('./plugins/dropbox/dropbox-modal.controller');
    require('./plugins/dropbox/dropbox.controller');

    // Plugin: Google Drive
    require('./plugins/google-drive/google-drive.service');
    require('./plugins/google-drive/google-drive-modal.controller');
    require('./plugins/google-drive/google-drive.controller');

    // Plugin: One Drive
    require('./plugins/one-drive/one-drive.service');
    require('./plugins/one-drive/one-drive-modal.controller');
    require('./plugins/one-drive/one-drive.controller');

    // Notifications
    require('./services/notification.service');

    // Zen Mode
    require('./zen-mode/zen-mode.controller');
    require('./zen-mode/zen-mode-toggle.directive');

    // Configure Dependencies
    angular.module('Dillinger', [
        'ngRoute',
        'diBase',
        'diDocuments',
        'diNotify',
        'diUser',
        'diZenMode',
        'plugins.github',
        'plugins.dropbox',
        'plugins.googledrive',
        'plugins.onedrive',
        'ui.bootstrap',
        'project'
    ])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/new', {
                templateUrl: 'templates/editor.html',
                controller: 'BaseController'
            }).
            when('/examples/:name', {
                templateUrl: 'templates/editor.html',
                controller: 'BaseController',
                reloadOnSearch: false
            }).
            otherwise({
                redirectTo: '/examples/pins.xml'
            });
        }
    ]);


    // Run!
    //angular.bootstrap(document, ['Dillinger']);
    // use ng-app instead

    // Simple and works.
    return jQuery(window).on('load', function() {
        return jQuery('.splashscreen').animate({
            opacity: 0
        }, 400, function() {
            return jQuery('.splashscreen').remove();
        });
    });

})(window, document);