(function (angular) {
  'use strict';

  angular.module('stockModule').factory('StockService', StockService);

  function StockService($http, $q, $log, Stock) {
    var baseUrl = '';

    return {
      getAll: getAll,
      setBaseUrl: setBaseUrl
    };



    function getAll() {
      var deferred = $q.defer();
      $http({
        url: baseUrl + '/api/stocks',
        method: 'GET'
      })
      .then(
        function (response) {
          try {
            var stocks = response.data._embedded.stocks.map(Stock.fromJson);
            deferred.resolve(stocks);
          } catch (error) {
            deferred.reject(error);
          }

        },
        function (error) {
          $log.error(error.status, error.statusText);
          deferred.reject(error);
        }
      );
      return deferred.promise;
    }

    function setBaseUrl(newBaseUrl) {
      baseUrl = newBaseUrl;
    }

  }

})(window.angular);
