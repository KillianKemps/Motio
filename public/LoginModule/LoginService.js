angular.module('LoginModule').factory('Login', ['$http', /*'$cookieStore',*/ function($http/*, $cookieStore*/) {

	var userData = null;

	/*userData._id = $cookieStore.get(‘userid’);
	userData.local.email = $cookieStore.get(‘useremail’);	*/

	return {
		setData: function (newData){
			userData = newData;
			/*$cookieStore.put(‘loggedin’, ‘true’);*/
			/*$cookieStore.put(‘userid’, userData._id);
			$cookieStore.put(‘useremail’, userData.local.email);*/
		},
		getData: function(){
			console.log(userData);

			return userData;			
		}
	}

  /*var Session = {
    data: {},
    saveSession: function() {  },
    updateSession: function() { 
      Session.data = $http.get('session.json').then(function(r) { return r.data;});
    }
  };
  Session.updateSession();
  return Session; 
*/

}]);