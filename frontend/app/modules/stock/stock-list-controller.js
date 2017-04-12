(function (angular) {
  'use strict';

  angular.module('stockModule').controller('StockListController', StockListController);

  function StockListController(StockService) {
    var vm = this;
    StockService
      .getAll()
      .then(
        function (response) {
          vm.stockList = response.data._embedded.stocks;
        },
        function (error) {
          vm.error = error;
        }
      );
  }

})(window.angular);
