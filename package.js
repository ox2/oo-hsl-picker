Package.describe({
  name: 'ox2:hsl-picker',
  summary: 'HSL picker for meteor ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.7',
    'mquandalle:jade@0.4.1'
    ]);
  // ox2
  api.use([
    'ox2:tinycolor@1.1.2_1'
    ]);
  api.addFiles([
    'lib/sliders.html',
    'lib/oo-hsl-picker.jade',
    'lib/oo-hsl-picker.js',
    'lib/oo-hsl-picker.less',
  ], C);
});

Package.onTest(function(api) {
  api.use('tinytest@1.0.0');
  api.use('ox2:hsl-picker@1.0.0');
  api.addFiles('tests/type-test.js', C);
});