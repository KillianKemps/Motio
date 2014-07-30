angular.module('LoginModule').factory('Login', ['$http', '$cookieStore', function($http, $cookieStore) {

	var userData = {};

	userData._id = $cookieStore.get('userid');
	userData.email = $cookieStore.get('useremail');	

	return {
		setData: function (newData){
			userData = newData;
			/*$cookieStore.put(‘loggedin’, ‘true’);*/
			$cookieStore.put('userid', userData._id);
			userData.email = userData.local.email;
			$cookieStore.put('useremail', userData.email);
		},
		getData: function(){
			//console.log(userData);

			return userData;			
		}
	}
}]);