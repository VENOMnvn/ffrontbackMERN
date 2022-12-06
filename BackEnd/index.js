const express = require('express');
const app = express();
var bodyParser = require('body-parser'); 
const getDataUser = require('./GetUserData');
const AddNewUser = require('./AddNewUser');
const SearchUser = require('./SearchUser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post("/signup",async (req,res)=>{
       res.send("Naveen");
       console.log("runeed")
        await AddNewUser(req.body);
      const result = await SearchUser(req.body);
       console.log(req.body),result;
})

app.get('/',(rq,rs)=>{
   rs.send("naveen");

});

app.listen(5000);


