(function(){
  'use strict';

  angular.module('events')
         .service('eventService', ['$q', '$http', 'ApiUrl', EventService]);

  /**
   * Events DataService
   * Events embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function EventService($q, $http, ApiUrl){
    var deferredEvents = $q.defer();
    var headers = {
    	'Content-Type' : 'application/json' 
    };
    
    $http.get(ApiUrl.get() + 'startDate/2015-12-01T00:00:00Z', headers)
    	.then(function(data) {
    		deferredEvents.resolve(data);
    	}, function(reason) {
    		deferredEvents.reject(reason);
    	});
    
    // Promise-based API
    return {
      get : function() {return deferredEvents.promise;}
    };
  }

})();
