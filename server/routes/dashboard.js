const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");


// 
router.post("/", authorize, async (req, res) => {
  try {
    console.log(req.body)
    const user = await pool.query(`SELECT * FROM users WHERE user_email = '${req.body.email}'`);
    if(user.rows[0] === undefined){
      //console.log("'There's no Match")
      res.json({'data': 'Wrong Email'})
    }
    else{
      //console.log("'There's a Match")
      //console.log(user.rows[0])
      res.json({ data: 'Done!'});
    }

    
    //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
