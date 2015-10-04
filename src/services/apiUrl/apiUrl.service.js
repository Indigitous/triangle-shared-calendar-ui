(function () {
	'use strict';

	// register the service as ApiUrlService
	angular
		.module('events')
		.service('ApiUrl', ApiUrl);

	// add ApiUrl dependencies to inject
	// ApiUrl.$inject = [''];

	/**
	 * ApiUrl constructor
	 * AngularJS will instantiate a singleton by calling "new" on this function
	 * @returns {Object} The service definition for the ApiUrl Service
	 */
	function ApiUrl() {

		return {
			get: get
		};

		// define instance methods
		function get () {
			return 'https://gentle-wildwood-1832.herokuapp.com/api/';
		}
	}

})();
