var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CyberSquare"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO students (name, course) VALUES ?";
  var values = [
    ['John', 'Python'],
    ['Peter', 'Flutter'],
    ['Amy', 'Angular'],
    ['Hannah', 'React'],
    ['Michael', 'PHP'],
    ['Sandy', 'Python'],
    ['Betty', 'Flutter'],
    ['Richard', 'React'],
    ['Susan', 'PHP'],
    ['Vicky', 'Angular'],
    ['Ben', 'Python'],
    ['William', 'Flutter'],
    ['Chuck', 'Angular'],
    ['Viola', 'React']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});