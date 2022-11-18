var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CyberSquare"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, course FROM students", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
    console.log(fields[0].name);
  });
});