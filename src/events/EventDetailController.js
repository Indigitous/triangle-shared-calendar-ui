(function() {

    angular
        .module('events')
        .controller('EventDetailController', [
            'eventService', '$mdDialog', '$log', '$q',
            EventDetailController
        ]);

    /**
     * Controller for Event Details
     */
    function EventDetailController(eventService, $mdDialog, $log, $q) {
        var self = this;
        self.hide = hide;

        function hide() {
        	$mdDialog.hide();
        };
    };
})();
