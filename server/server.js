const express = require("express");
const app = express();
const cors = require("cors");

/* USEFUL SUPPORTING DOC"S
CORS and express: https://www.youtube.com/watch?v=woXBXJgGQvQ
CORS document: https://www.npmjs.com/package/cors#enabling-cors-pre-flight 
*/

//middleware

app.use(cors());
app.use(express.json());


//routes

app.use("/authentication", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));



/*//emailForm
app.post("http://localhost:8000/dashboard/", (req, res) => { 
  console.log('i got a message');
  console.log(req.body);
})*/

app.listen(8000, async () => {
  console.log(`Server is starting on port 8000`);
});
