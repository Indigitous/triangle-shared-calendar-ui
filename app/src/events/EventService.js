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

	this.get = function(startDate, pageSize, pageStart) {
		var deferredEvents = $q.defer();
		
		/*copy startDate b/c manipulations we need to make will affect the UI if we don't*/
		var queryDate = new Date(startDate);
		
		/*get the offset in hours from UTC*/	
		var offsetHours = queryDate.getTimezoneOffset() / 60;
		
		/* set the time to midnight of the day we want to retrieve data for */
		queryDate.setHours(offsetHours,0,0,0);
		
	    var isoQueryDate = $filter('date')(queryDate,'yyyy-MM-ddTHH:mm:ss');
	    
	    var config = {
	    	params: {
				size : pageSize || 50,
				start : pageStart || 0	
			}
		};
		
	    $http.get(ApiUrl.get() + 'startDate/' + isoQueryDate + 'Z', config)
    		.then(function(data) {
    			deferredEvents.resolve(data);
	    	}, function(reason) {
    			deferredEvents.reject(reason);
    		});
    	
    	return deferredEvents.promise;
	};
  }

})();
