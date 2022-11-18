var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CyberSquare"
});

con.connect(function(err) {
  if (err) throw err;
  var name = 'Amy';
  var course = 'Angular';
  //Escape the name and the address values:
  var sql = 'SELECT * FROM students WHERE name = ? OR course = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql, [name, course], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});