'use strict';

module.exports = function (Supplier) {

  Supplier.on('dataSourceAttached', function (obj) {

    var connection = Supplier.dataSource.app.dataSources.ecsdev.connector;

    Supplier.create = function (data, cb) {

      var sql = "BEGIN jc_test.create_supplier(:name); END;";

      connection.execute(sql, [data.name], function (err, result) {
        if (err) {
          console.log("Error:", err);
        }
        cb(err, data);
      });
    };
  });
};
