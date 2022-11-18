var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CyberSquare"
});

con.connect(function(err) {
  if (err) throw err;
  var course = 'Python';
  //Escape the address value:
  var sql = 'SELECT * FROM students WHERE course = ' + mysql.escape(course);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
