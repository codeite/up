var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

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
