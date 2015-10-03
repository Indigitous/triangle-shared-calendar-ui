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

    self.date = new Date();
    self.selectedDate = self.date;

    eventService
          .get()
          .then( function( events ) {
            self.events    = [].concat(events);
            self.selected = events[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    function changeDate(changeBy) {
      this.selectedDate = new Date(
        this.selectedDate.getFullYear(),
        this.selectedDate.getMonth(),
        this.selectedDate.getDate() + changeBy
      );
    }

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

    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var event = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/events/view/contactSheet.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.event = event;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
