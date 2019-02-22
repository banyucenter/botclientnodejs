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
      'Authorization': 'EndpointKey 7739336f-f037-4a10-8513-994031e04a28'
    }
  }

  fetch('https://qnanodebotapp.azurewebsites.net/qnamaker/knowledgebases/7b6b8b21-b1a8-4d1d-bee5-6176309488c5/generateAnswer', options)
    .then(res => res.json())
    .then(json => res.render('index2', {
      title: 'Web Apps Machine Learning Bot Azure',
      datanya: json.answers[0].answer
    }));

});

module.exports = router;


