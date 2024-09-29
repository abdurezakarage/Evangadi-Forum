const express = require("express");
const app = express();
const port = 6500;
const dbconnection = require("./db/dbconfig");
//user route midilware
const userroutes = require("./Routes/userroute");
app.use("/api/users", userroutes);
//question route midilware

//answer route midilware
async function stsrt() {
  try {
    const result = await dbconnection.execute("select 'test'");
    await app.listen(port)
    console.log(`database connection established`);
    console.log(`listening on ${port}`);
  } catch (err) {
    console.log(err.message);
  }
}
stsrt();



