

angular.module('todoModule').factory('Todo', function($resource) {
  //return $resource('/api/todo/:todoId'); // Note the full endpoint address
  return $resource('/api/:userId/todo/:todoId', { userId: '@_id', todoId: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});