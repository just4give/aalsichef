(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
   
   var SearchController = function($scope, $rootScope, $log){
	   $log.debug('loading search controller');
	   
	   $scope.stores=[{
		   name:"Jack's kitchen",
		   address:"Braintree, MA",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   desc:"Fried Calamari, Fish and Chips, Lobster Roll",
		   photos:[{url:"fish-and-chips.jpg"},{url:"fried-calamari.jpg"},{url:"lobster_rolls.jpg"},{url:"bg4.jpg"},{url:"bg1.jpg"},{url:"bg2.jpg"}]
	   },
	   {name:"Just Food",
		   address:"Natick, MA",
		   phone:"860-679-9909",
		   hour:"3PM-10PM",
		   photos:[]
	   
	   },
	   {name:"Kebab House",
		   address:"Cambridge, MA",
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