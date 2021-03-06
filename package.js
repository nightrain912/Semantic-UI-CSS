var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-css',
  summary : 'Semantic UI - CSS Release of Semantic UI',
  version : '1.11.2',
  git     : 'git://github.com/Semantic-Org/Semantic-UI-CSS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.addFiles([
    // icons
    'themes/default/assets/fonts/icons.eot',
    'themes/default/assets/fonts/icons.otf',
    'themes/default/assets/fonts/icons.svg',
    'themes/default/assets/fonts/icons.ttf',
    'themes/default/assets/fonts/icons.woff',
    'themes/default/assets/fonts/icons.woff2',

    // flags
    'themes/default/assets/images/flags.png',

    // release
    'semantic.css',
    'semantic.js'
  ], 'client');

});
