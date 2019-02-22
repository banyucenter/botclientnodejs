# botclientnodejs
Bot Client Using NodeJs QNAmaker ai


Step

1. Create QnA Maker ai Account Azure and Generate Knowledge
2. Train the Ai
3. Publish the Knowledge
4. Get Rest API 
5. Create Express js Generator

```
npm install express-generator -g
```

```
express -h
```

```
express --view=ejs myapp
```

```
cd myapp
```

```
npm install
```

6. Install npm modules

```
npm i node-fetch

npm i sprintf-js

npm i bootstrap
```

7. Add Bootstrap static path in app.js

```
//static path bootstrap
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
```

8. define npm modul in routes index

```
//Instal Node Fetch
let fetch = require('node-fetch');

//Install SprintF
var sprintf = require('sprintf-js').sprintf;
```

9. Create post action method in routes index.js

```
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
      'Authorization': 'EndpointKey (endpoint key)'
    }
  }

  fetch('(url qna rest api)', options)
    .then(res => res.json())
    .then(json => res.render('index2', {
      title: 'Web Apps Machine Learning Bot Azure',
      datanya: json.answers[0].answer
    }));

});
```

10. to Run

```
npm start
```

at terminal
