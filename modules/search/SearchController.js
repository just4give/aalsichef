(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
   
   var SearchController = function($scope, $rootScope, $log){
	   $log.debug('loading search controller');
	   
	   $scope.stores=[{
		   name:"Riya's home kitchen",
		   address:"Jadavpur, Kolkata",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   desc:"Biriyani, Chicken Cutlet, Fish Chop, Mutton Curry",
		   photos:[{url:"bg1.jpg"},{url:"bg2.jpg"},{url:"bg3.jpg"},{url:"bg4.jpg"},{url:"bg1.jpg"},{url:"bg2.jpg"}]
	   },
	   {name:"Just Food",
		   address:"Golpark, Kolkata",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   photos:[]
	   
	   },
	   {name:"Bengali House",
		   address:"Jadavpur, Kolkata",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   photos:[{url:"bg1.jpg"},{url:"bg3.jpg"},{url:"bg4.jpg"},{url:"bg2.jpg"}]
	   
	   }];
	   
	   $scope.gallery = [
	                     {
	                    	 url:"bg1.jpg"
	                     },
	                     {
	                    	 url:"bg2.jpg"
	                     },
	                     {
	                    	 url:"bg3.jpg"
	                     },
	                     {
	                    	 url:"bg4.jpg"
	                     }
	                     ,
	                     {
	                    	 url:"bg1.jpg"
	                     }
	                     ,
	                     {
	                    	 url:"bg2.jpg"
	                     }
	                     ];
	   
	  
	   
	   $scope.trends = ["abc","adsad","asdasd","ewrrw","asdad"];
   };
    
   return ["$scope","$rootScope","$log", SearchController];
});

}());