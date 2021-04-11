/* eslint-disable global-require */
const mix = require('laravel-mix');
// const path = require('path');
const cssImport = require('postcss-import');
const cssNesting = require('postcss-nesting');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/app/js/app.js', 'public/js/app.js')
  .sass('resources/admin/sass/app.scss', 'public/css/app.css', {}, [
    // prettier-ignore
    cssImport(),
    cssNesting(),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
  .webpackConfig((webpack) => ({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  }))
  .version()
  .sourceMaps();
