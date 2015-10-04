(function() {

    angular
        .module('events')
        .config(function($httpProvider) {
            $httpProvider.defaults.headers.common['Accept'] = 'application/json';
        })
        .controller('EventController', [
            'eventService', '$mdDialog', '$log', '$q',
            EventController
        ]);

    /**
     * Main Controller for the Soon App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function EventController(eventService, $mdDialog, $log, $q) {
        var self = this;

        self.selected = null;
        self.events = [];
        self.changeDate = changeDate;
        self.loadEvents = loadEvents;
        self.startSearch = startSearch;
        self.showEvent = showEvent;
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
            if (events.data && events.data.events) {
                self.events = [].concat(events.data.events);
            } else {
                self.events = [];
                self.noEventsFound = true;
            }

            if (events.data && events.data.events) self.selected = events.data.events[0];

            self.loadingEvents = false;
        }

        function startSearch() {
            prepareForApiDownload();

            eventService
                .findEvents(self.search)
                .then(function(events) {
                    handleApiDownload(events);
                });
        };

        function loadEvents() {
            prepareForApiDownload();

            eventService
                .getEvents(self.selectedDate, 50, 0, self.distance)
                .then(function(events) {
                    handleApiDownload(events);
                });
        };

        function showEvent(eventId) {



            eventService
                .getEvent(eventId)
                .then(function(event) {
                    console.log(event);
                    $mdDialog.show({
                        controller: 'EventDetailController',
                        controllerAs: 'dialog',
                        templateUrl: 'src/events/view/directives/eventDetails.html',
                        parent: angular.element(document.body),
                        targetEvent: eventId,
                        locals: {'event': event},
                        bindToController: true,
                        clickOutsideToClose: true
                    });
                    setTimeout(addthisevent.refresh, 1000);
                });
        }
    }

})();
