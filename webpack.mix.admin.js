/* eslint-disable global-require */
const mix = require('laravel-mix');
const path = require('path');
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
  .js('resources/admin/js/app.js', 'public/js/admin.js')
  .react()
  .sass('resources/admin/sass/app.scss', 'public/css/admin.css', {}, [
    // prettier-ignore
    cssImport(),
    cssNesting(),
    require('tailwindcss')('./tailwind.config.admin.js'),
    require('autoprefixer'),
  ])
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        '@': path.resolve('resources/admin/js'),
        '@pages': path.resolve('resources/admin/js/Pages'),
        '@inc': path.resolve('resources/admin/js/Includes'),
        '@comp': path.resolve('resources/admin/js/Components'),
      },
    },
  })
  .version()
  .sourceMaps();
