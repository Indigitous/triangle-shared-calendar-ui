(function(){
  'use strict';

  angular.module('events')
         .service('eventService', ['$q', '$http', '$filter', 'ApiUrl', EventService]);

  /**
   * Events DataService
   * Events embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function EventService($q, $http, $filter, ApiUrl){

	var getStartDatePathString = function(startDate){
		/*copy startDate b/c manipulations we need to make will affect the UI if we don't*/
		var queryDate = new Date(startDate);
		
		/*get the offset in hours from UTC*/	
		var offsetHours = queryDate.getTimezoneOffset() / 60;
		
		/* set the time to midnight of the day we want to retrieve data for */
		queryDate.setHours(offsetHours,0,0,0);
		
		var endDate = new Date(queryDate);
		endDate.setMinutes(queryDate.getMinutes() + 1439);
		
		return $filter('date')(queryDate,'yyyy-MM-ddTHH:mm:ss') + 'Z';
	}
	
	var getEndDatePathString = function(startDate){
		/*copy startDate b/c manipulations we need to make will affect the UI if we don't*/
		var queryDate = new Date(startDate);
		
		/*get the offset in hours from UTC*/	
		var offsetHours = queryDate.getTimezoneOffset() / 60;
		
		/* set the time to midnight of the day we want to retrieve data for */
		queryDate.setHours(offsetHours,0,0,0);
		
		var endDate = new Date(queryDate);
		endDate.setMinutes(queryDate.getMinutes() + 1439);
		
		return $filter('date')(endDate,'yyyy-MM-ddTHH:mm:ss') + 'Z';
	}
	
	var path = function(startDate, coordinates) {
		if(coordinates) {
			return 'events' 
				+ '/' + getStartDatePathString(startDate) 
				+ '/' + getEndDatePathString(startDate)
				+ '/' + coordinates.latitude
				+ '/' + coordinates.longitude;
		} else {
			return 'events' 
				+ '/' + getStartDatePathString(startDate) 
				+ '/' + getEndDatePathString(startDate);
		}
	};
	
	this.get = function(startDate, pageSize, pageStart, distance) {
		var deferredEvents = $q.defer();
		
	    var config = {
	    	params: {
	    		distance : distance || 30,
				size : pageSize || 50,
				start : pageStart || 0	
			}
		};
		
		var lat;
		var lon;
		
	 	navigator.geolocation.getCurrentPosition(function(position/*success*/){
			$http.get(ApiUrl.get() + path(startDate,position.coords), config).then(function(data) {
    			deferredEvents.resolve(data);
	    	}, function(reason) {
    			deferredEvents.reject(reason);
    		});
	 	}, function(/*failure*/){
		 	$http.get(ApiUrl.get() + path(startDate), config).then(function(data) {
    			deferredEvents.resolve(data);
	    	}, function(reason) {
    			deferredEvents.reject(reason);
    		});
	 	});
	 	
	    
    	
    	return deferredEvents.promise;
	};
  }

})();
