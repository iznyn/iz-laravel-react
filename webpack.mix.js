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
  .js('resources/js/app.js', 'public/js')
  .react()
  .sass('resources/sass/app.scss', 'public/css', {}, [
    // prettier-ignore
    cssImport(),
    cssNesting(),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        '@': path.resolve('resources/js'),
        '@pages': path.resolve('resources/js/Pages'),
        '@inc': path.resolve('resources/js/Includes'),
        '@comp': path.resolve('resources/js/Components'),
      },
    },
  })
  .version()
  .sourceMaps();
