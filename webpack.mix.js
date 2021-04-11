// let mix = require('laravel-mix');

if (process.env.section) {
  // eslint-disable-next-line global-require
  require(`${__dirname}/webpack.mix.${process.env.section}.js`);
}
