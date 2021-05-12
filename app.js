const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, host, function() {
  console.log('Running at Port 5000');
});

