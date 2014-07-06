

angular.module('mainModule').factory('Task', function($resource) {
  return $resource('/api/todo/:taskId'); // Note the full endpoint address
});