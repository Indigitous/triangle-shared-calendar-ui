(function(){

  angular
       .module('events')
       .config(function ($httpProvider) {
			$httpProvider.defaults.headers.common['Accept'] = 'application/json';
		})
       .controller('EventController', [
          'eventService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          EventController
       ]);

  /**
   * Main Controller for the Soon App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function EventController( eventService, $mdSidenav, $log, $q) {
    var self = this;

    self.selected     = null;
    self.events        = [ ];
    self.selectEvent   = selectEvent;
    self.toggleList   = toggleEventsList;
    self.changeDate   = changeDate;
    self.loadEvents   = loadEvents;
    self.startSearch  = startSearch;
    self.loadingEvents = true;

    self.date = new Date();
    self.selectedDate = self.date;

	self.distance = 20;
	
	loadEvents();
	
    // *********************************
    // Internal methods
    // *********************************

    function changeDate(changeBy) {
      this.selectedDate = new Date(
        this.selectedDate.getFullYear(),
        this.selectedDate.getMonth(),
        this.selectedDate.getDate() + changeBy
      );

      loadEvents();
    };
    
    function prepareForApiDownload() {
		// Clear the events and show the loading icon
		self.events = [];
		self.loadingEvents = true;
		self.noEventsFound = false;
    }
    
    function handleApiDownload(events) {
    	if(events.data && events.data.events) {
			self.events = [].concat(events.data.events);
		} else {
			self.events = [];
			self.noEventsFound = true;
		}

		if(events.data && events.data.events) self.selected = events.data.events[0];

		self.loadingEvents = false;
	}
    
    function startSearch() {
		prepareForApiDownload();

    	eventService
    		.findEvents(self.search)
    		.then( function (events) {
				handleApiDownload(events);
			});
	};
    
    function loadEvents() {
		prepareForApiDownload();

		eventService
			.getEvents(self.selectedDate, 50, 0, self.distance)
			.then( function( events ) {
				handleApiDownload(events);
			});    
    };

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleEventsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectEvent ( user ) {
      self.selected = angular.isNumber(user) ? $scope.events[event] : event;
      self.toggleList();
    }
  }

})();
