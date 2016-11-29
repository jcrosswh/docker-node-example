'use strict';

var oracledb = require('oracledb');

module.exports = function (Supplier) {

  Supplier.on('dataSourceAttached', function (obj) {

    var connection = Supplier.dataSource.app.dataSources.ecsdev.connector;

    Supplier.create = function (data, cb) {

      var sql = "BEGIN jc_test.create_supplier(:name, :id); END;";

      connection.execute(sql, [data.name, {type: oracledb.NUMBER, dir: oracledb.BIND_OUT}], function (err, result) {
        if (err) {
          console.log("Error:", err);
          return;
        }
        data.id = result.outBinds[0];
        cb(err, data);
      });
    };
  });
};
