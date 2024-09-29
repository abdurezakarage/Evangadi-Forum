const mysq2 = require("mysql2");
const dbconnection = mysq2.createPool({
  user: "EvaForum",
  database: "evaforum",
  host: "localhost",
  password: "123456",
  connectionLimit: 10,
});
// dbconnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });
module.exports = dbconnection.promise()