// Karma configuration
// Generated on Fri Jul 18 2014 20:49:37 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'public/libs/angular/angular.js',
      'public/libs/angular-route/angular-route.js',
      'public/libs/angular-resource.min.js',
      'public/libs/angular-mocks.js',
      'public/libs/ui-bootstrap-tpls-0.11.0.min.js',
      'public/TodoModule/TodoCtrl.tests.js',
      'public/js/app.js',
      'public/js/appRoutes.js',
      'public/TodoModule/TodoCtrl.js',
      'public/AdministrationModule/AdministrationCtrl.js',
      'public/LoginModule/LoginCtrl.js',
      'public/SignupModule/SignupCtrl.js',
      'public/TodoModule/TodoService.js',
      'public/AdministrationModule/AdministrationService.js',
      'public/LoginModule/LoginService.js',
      'public/SignupModule/SignupService.js',
      
    ],


    // list of files to exclude
    exclude: [
        'public/libs/bootstrap/*.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
