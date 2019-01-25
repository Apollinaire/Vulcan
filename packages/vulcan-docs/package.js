Package.describe({
  name: 'vulcan:docs',
  summary: 'Vulcan docs package',
  version: '1.12.11',
  git: 'https://github.com/VulcanJS/Vulcan.git',
  debugOnly: true
});

Package.onUse(api => {
  api.versionsFrom('1.6.1');
  
  api.use([
    'vulcan:core',
    'apollinaire:mdx' //required to load the src files
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
