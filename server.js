const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const models = require('./models')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { piece } = models
// API calls
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });
// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });


app.post("/api/piece", function(req,res,next){
    console.log(req.body)
    const { title, description, category, img_url, availability, price } = req.body
    piece.create({
        title, description, category, img_url, availability, price
    })
})

//returns a single piece, notice the word async before the function, this allows us to use the await keyword for async calls. 
//await pauses the execution of the function and waits for the result to come back. once the result has come back, it assigns 
//the result object to the variable where the await was called. Then it continues on with the rest of the function.
app.get("/api/piece/:id", async function(req,res,next){

    const { id } = req.params

    var queryResult = await piece.find({
        where: { id: id? id : null}
    }) 

    var pieceJson = queryResult.get({plain: true})

    console.log(pieceJson)

})

app.get("/api/pieces", async function(req,res,next){

    var pieces = await piece.findAll()

    var piecesArray = []
    pieces.forEach(function(thePiece){
        pieceJson = thePiece.get({plain: true})
        piecesArray.push(pieceJson)
    })


    console.log(piecesArray)

})

app.put("/api/piece", function(req,res,next){

})
app.delete("/api/piece", function(req,res,next){

})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));