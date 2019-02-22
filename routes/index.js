var express = require('express');
var router = express.Router();

//Instal Node Fetch
let fetch = require('node-fetch');

//Install SprintF
var sprintf = require('sprintf-js').sprintf;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Web Apps Machine Learning Bot Azure' });
});

//Aksi POST
router.post('/send', function (req, res, next) {
  var data = {
    pertanyaan: req.body.questions
  };

  const options = {
    method: 'POST',
    body: sprintf('{"question": "%(pertanyaan)s"}', data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'EndpointKey <your key endpoint>'
    }
  }

  fetch('<your url qna rest api>', options)
    .then(res => res.json())
    .then(json => res.render('index2', {
      title: 'Web Apps Machine Learning Bot Azure',
      datanya: json.answers[0].answer
    }));

});

module.exports = router;


