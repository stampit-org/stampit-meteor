Package.describe({
  name: 'stampitorg:stampit',
  version: '2.1.1',
  summary: 'OOP is better with stamps: Composable object factories',
  git: 'https://github.com/stampit-org/stampit-meteor',
  documentation: 'README.md'
});

Npm.depends({
  "stampit": "2.1.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['cosmos:browserify@0.2.0'], 'client');

  api.addFiles(['client.browserify.js'], 'client');
  api.addFiles(['server-export.js'], 'server');

  api.export('stampit');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('stampitorg:stampit');
  api.addFiles('stampit-tests.js');
});
