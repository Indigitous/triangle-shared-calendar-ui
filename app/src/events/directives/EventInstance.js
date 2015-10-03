'use strict';

/**
 * @ngdoc directive
 * @name events.directive:eventInstance
 * @description
 * # eventInstance
 */
angular.module('events')
  .directive('eventInstance', function () {
    return {
      scope: {
      	event: '='
      },
      templateUrl: 'events/view/directives/eventInstance.html',
      restrict: 'E'
    };
  });

