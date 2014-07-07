

angular.module('mainModule').factory('Todo', function($resource) {
  return $resource('/api/todo/:todoId'); // Note the full endpoint address
});