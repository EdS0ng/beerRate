'use strict';

angular.module('testApp').directive('check', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    template: '<div class="sampled_checkbox" ng-show="showRate">
    <label class="checkbox-inline"><input type="checkbox" ng-model="sampledCheck.value1" ng-click="saveSampledChoice(1)">Yes</label>
    <label class="checkbox-inline"><input type="checkbox" ng-model="sampledCheck.value2" ng-click="saveSampledChoice(2)">No</label>
  </div>'
  };
});