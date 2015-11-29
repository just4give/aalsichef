(function(){
	'use strict';
 var dependencies = []	;
 
define(dependencies, function(){
   
   var ReviewController = function($scope, $rootScope, $log,$modal,$window,$timeout,Upload){
	   $log.debug('loading ReviewController controller');
	   $scope.rating =1;
	    
	   $timeout(function(){
		   var ratings = $(".review-rating li");
		   
		   var r = $(".review-rating li:nth-child("+ $scope.rating +")");
		   $(r).prevAll().andSelf().addClass('active');
		   
		   $(ratings).hover(function(){
			   $(this).prevAll().andSelf().removeClass('active');
			   $(this).nextAll().removeClass('active');
			   $(this).prevAll().andSelf().addClass('active');
			   $scope.rating = $(this).attr("value");
			   $scope.$apply();
			     
		   },
		   function(){
			  
		   });
		   
	   },0);
	   
	   	$scope.files =[];
	   	
	    $scope.uploadFiles = function(file) {
	    	
	    		$log.debug(file);
	    		if(file){
	    			$scope.fileuploadError = file.$error;
	    		}
	    		
	        
	            if (file && !file.$error) {
	            	
	            	$scope.files.push(file);
	            	file.loading = true;
	         		file.upload = Upload.upload({
	                  url: 'http://localhost:8080/acweb/upload',
	                  fields: {'username': 'zouroto'},
	                  file: file
	                });

	                file.upload.then(function (response) {
	                 
	                	$log.debug("sucess");
	                	$log.debug(response);
	                    //file.result = response.data;
	                    file.s3url = "/assets/"+response.data;
	                    file.loading = false;
	                  
	                }, function (response) {
	                	$log.debug("fail");
	                	file.failed = true;
	                	file.loading = false;
	                	$log.debug(response);
	                  if (response.status > 0)
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                });

	                file.upload.progress(function (evt) {
	                  file.progress = Math.min(100, parseInt(100.0 * 
	                                           evt.loaded / evt.total));
	                  $log.debug("progress "+ file.progress);
	                });
	    		}   
	        
	    }
	   

	   
	   
   };
    
   return ["$scope","$rootScope","$log","$modal","$window", "$timeout","Upload",ReviewController];
});

}());