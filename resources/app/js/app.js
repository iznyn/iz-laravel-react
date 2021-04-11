import 'jquery';

(($) => {
  const title = 'Test';
  const info = 'This is a test';
  const content = `<div><h1>${title}</h1><p>${info}</p></div>`;
  $(content).appendTo($('body'));
})(jQuery);
