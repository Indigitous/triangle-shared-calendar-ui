'use strict';

describe('Service: ApiUrl', function () {

	// load the service's module
	beforeEach(module('angularMaterialStarterApp'));

	// instantiate service
	var service;

	beforeEach(inject(function (_ApiUrl_) {
		service = _ApiUrl_;
	}));

	it('should be defined', function () {
		Should.exist(service);
	});

	it('should expose a working doSomething function', function () {
		Should.exist(service.doSomething);
		service.doSomething().should.equal('apiUrl');
	});

});
