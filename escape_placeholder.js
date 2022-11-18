var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CyberSquare"
});

con.connect(function(err) {
  if (err) throw err;
  var course = 'Flutter';
  //Escape the address value:
  var sql = 'SELECT * FROM students WHERE course = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql, [course], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});