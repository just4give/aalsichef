(function(){
	'use strict';
 var dependencies = [
               'angular',
               'modules/app/AppConfig',
               'modules/app/AppController',
               'modules/search/SearchController',
               'modules/restaurant/RestaurantController',
               'modules/restaurant/ReviewController'
     ]	;
 
define(dependencies, function(angular, config, AppController,SearchController,RestaurantController,ReviewController){
    var moduleName = 'module.app';
    var app = angular.module(moduleName, []);
    app.config(config);
    app.controller('appController', AppController);
    app.controller('searchController', SearchController);
    app.controller('restaurantController',RestaurantController);
    app.controller('reviewController',ReviewController);
    
    return moduleName;
    
});

}());