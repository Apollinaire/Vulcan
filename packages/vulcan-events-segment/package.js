Package.describe({
  name: 'vulcan:events-segment',
  summary: 'Vulcan Segment',
  version: '1.12.14',
  git: 'https://github.com/VulcanJS/Vulcan.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');

  api.use(['vulcan:core@1.12.14', 'vulcan:events@1.12.14']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
