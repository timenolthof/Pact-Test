(function (angular) {
  'use strict';

  describe('StockService', function () {
    let StockService, provider, tester;

    let somethingLike = Pact.Matchers.somethingLike;
    let eachLike      = Pact.Matchers.eachLike;

    beforeAll(function () {
      tester = ngMidwayTester('stockModule');
      StockService = tester.inject('StockService');
      StockService.setBaseUrl('http://localhost:1234');

      provider = Pact({
        consumer: 'StockApp',
        provider: 'StockBackend',
      });

      // Required if run with `singleRun: false`
      provider.removeInteractions();
    });

    afterAll(function (done) {
      tester.destroy();

      provider
        .finalize()
        .then(function () { done() }, function (err) { done.fail(err) });
    });

    it('should be defined', function() {
        expect(StockService).toBeDefined();
        expect(StockService.getAll).toBeDefined();
    });

    describe("getAll", function () {

      beforeAll(function (done) {
        provider
          .addInteraction({
            uponReceiving: 'a request for all stocks',
            withRequest: {
              method: 'GET',
              path: '/api/stocks'
            },
            willRespondWith: {
              status: 200,
              headers: { "Content-Type": "application/hal+json;charset=UTF-8" },
              body: {
                "_embedded": {
                  "stocks": eachLike({
                      id: somethingLike(1),
                      name: somethingLike("Tesla"),
                      currentPrice: somethingLike(42.42),
                      lastUpdate: somethingLike("1997-07-16T19:20:30.45+01:00"),
                  }),
                }
              }
            }
          })
          .then(function () { done() }, function (err) { done.fail(err) });
      });

      it('returns an array of stocks', function(done) {
        StockService
          .getAll()
          .then(
            function (response) {
              expect(response.data._embedded.stocks).toEqual([{
                id: 1,
                name: "Tesla",
                currentPrice: 42.42,
                lastUpdate: "1997-07-16T19:20:30.45+01:00"
              }]);
              done();
            },
            function (error) {
              done.fail("Network request failed: " + error.data);
            }
          );
      });

      it('successfully verifies with Pact', function(done) {
        provider.verify()
          .then(function(a) {
            done();
          }, function(e) {
            done.fail(e);
          });
      });
    });

  });

})(window.angular);
