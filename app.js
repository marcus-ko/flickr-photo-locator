const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.port || 5000);

console.log('Running at Port 5000');