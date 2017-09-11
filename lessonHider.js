angular.module("directivePractice").directive("lessonHider", function() {
  return {
    templateUrl: "./lessonHider.html",
    restrict: "E",
    scope: {
      lesson: "=",
      dayAlert: "&"
    },
    link: function(scope, elem, attr) {
      scope.getSchedule.then(function(resp) {
        scope.schedule = resp.data;
        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            elem.css("text-decoration", "line-through");
            scope.lessonDay = scheduleDay.weekday;
            return;
          }
        });
      });
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    }
  };
});
