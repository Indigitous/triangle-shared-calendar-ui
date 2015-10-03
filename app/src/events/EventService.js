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
		
	    var isoStartDate = $filter('date')(startDate || new Date(),'yyyy-MM-ddTHH:mm:ss');
	    
	    var config = {
	    	params: {
				size : pageSize || 50,
				start : pageStart || 0	
			}
		};
		
	    $http.get(ApiUrl.get() + 'startDate/' + isoStartDate + 'Z', config)
    		.then(function(data) {
    			deferredEvents.resolve(data);
	    	}, function(reason) {
    			deferredEvents.reject(reason);
    		});
    	
    	return deferredEvents.promise;
	};
  }

})();
