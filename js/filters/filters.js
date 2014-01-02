/*
	Create a module called phonecatFilter and gave it a custom filter named checkmark.

	Return true (\u2713 -> ✓) or false (\u2718 -> ✘)
*/

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});