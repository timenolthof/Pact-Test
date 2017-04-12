//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/ng-midway-tester/src/ngMidwayTester.js',
      'node_modules/pact/dist/pact.web.js',
      'app/modules/*.js',
      'app/modules/**/index.js',
      'app/modules/**/*.js',
      'app/modules/**/*.html',
      'app/modules/**/*.spec.js',
      'app/modules/**/*.mock.js'
    ],

    //pact: {},

    logLevel: config.LOG_DEBUG,
    autoWatch: true,

    frameworks: ['jasmine', 'pact'],

    browsers: ['Chrome_without_security'],

    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-pact'
    ]

  });
};
