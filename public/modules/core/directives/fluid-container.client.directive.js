'use strict';

angular.module('core').directive('fluidContainer', [
	'$window',
	function($window) {
		return {
			template: '<div class="container" ng-transclude></div>',
			restrict: 'EA',
			transclude: true,
			replace: true,
			link: function postLink(scope, element, attrs) {
				var setFluidHeight = function(){
					var totalHeight = 0;
					element.find('[fixed]').each(function(){
						totalHeight += parseInt($(this).css('height'));
					});

					element.find('[fluid]').height(parseInt(element.css('height')) - totalHeight);
				};

				angular.element($window).on('resize', function () {
					setFluidHeight();
				});

				setFluidHeight();
			}
		};
	}
]);
