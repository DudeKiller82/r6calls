'use strict';

var R6MHelpers = (function($, window, document, undefined) {
  var trySelectOption = function trySelectOption($selectEl, option) {
    var $selectOption = $selectEl.find('option[value="' + option + '"]');

    if ($selectOption.length) {
      $selectOption.prop('selected', true);
      return true;
    }
    return false;
  };

  return {
    trySelectOption: trySelectOption
  };
})(window.jQuery, window, document);
