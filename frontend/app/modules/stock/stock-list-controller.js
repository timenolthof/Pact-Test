(function (angular) {
  'use strict';

  angular.module('stockModule').controller('StockListController', StockListController);

  function StockListController(StockService) {
    var vm = this;
    StockService
      .getAll()
      .then(
        function (stocks) {
          vm.stockList = stocks;
        },
        function (error) {
          console.error(error);
          vm.error = error.message;
        }
      );
  }

})(window.angular);
