(function (angular) {
  'use strict';

  angular.module('stockModule').factory('StockService', StockService);

  function StockService($http, $q) {
    var baseUrl = '';

    return {
      getAll: getAll,
      setBaseUrl: setBaseUrl
    };

    function getAll() {
      return $http({
        url: baseUrl + '/api/stocks',
        method: 'GET'
      });
    }

    function setBaseUrl(newBaseUrl) {
      baseUrl = newBaseUrl;
    }

  }

})(window.angular);
