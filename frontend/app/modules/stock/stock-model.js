(function (angular) {
  'use strict';

  angular.module('stockModule').factory('Stock', StockModel);

  function StockModel() {
    function Stock(id, name, currentPrice, lastUpdate) {
      this.id = id;
      this.name = name || '';
      this.currentPrice = currentPrice || 0.0;
      this.lastUpdate = lastUpdate || null;
    }

    Stock.fromJson = function (data) {
      if (data && data.id && data.name) {
        return new Stock(data.id,
                         data.name,
                         data.currentPrice,
                         data.lastUpdate);
      } else {
        throw new Error("StockModel: Error parsing JSON: Missing required property.");
      }
    };

    return Stock;
  }

})(window.angular);
