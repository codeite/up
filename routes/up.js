var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,Authorization,Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Methods', 'GET,POST,GET,DELETE');

  if(false) {
    var delay = 5000 + ~~(Math.random() * 5000);

    setTimeout(function () {
      
      res.send('');
    }, delay);
    return;
  }

  res.send('');

});

module.exports = router;
