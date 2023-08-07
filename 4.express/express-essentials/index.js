import express from 'express';
import data from './data/mock.json' assert { type: 'json', integrity: 'sha384-ABC123' };

const app = express();

const PORT = 3000;

//Using the public folder at the root of the project
app.use(express.static('public'));

//Using the images folder ta the route /images
app.use('/images', express.static('images'));

// Using express.json and express.urlencoded
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET
app.get('/', (request, response) => {
  response.json(data);
});

// POST - express.json and express.urlencoded
app.post('/item', (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

//GET - redirect method
app.get('/redirect', (request, response) => {
  response.redirect('http://www.linkedin.com');
});

app
  .route('/class')
  .get((reqeust, response) => {
    throw new Error();
    // response.send('Retrieve class info');
  })
  .post((reqeust, response) => {
    response.send('Create class info');
  })
  .put((reqeust, response) => {
    response.send('Update class info');
  });

//GET with next
app.get(
  '/next',
  (request, response, next) => {
    console.log('The response will be sent by the next function');
    next();
  },
  (request, response) => {
    response.send('I just set up a route with a second callback');
  }
);

//GET with routing parameters
app.get('/class/:id', (request, response) => {
  const studentId = Number(request.params.id);

  const student = data.filter((student) => student.id === studentId);
  response.send(student);
});

//POST
app.post('/create', (request, response) => {
  response.send('This is a POST request at /create');
});

//PUT
app.put('/edit', (request, response) => {
  response.send('This is a PUT request at /edit');
});

//DELETE
app.delete('/delete', (request, response) => {
  response.send('This is a DELETE request at /delete');
});

app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send('Something is broken');
});

app.listen(PORT, () => {
  console.log(`The server is running on port : ${PORT}`);
});
