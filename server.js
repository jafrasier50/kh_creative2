const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// this imports the sequelize models from the models folder
const models = require('./models')

// formats each incoming req.body into a json object, from both of these post request types
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this selects the "piece" model off of the models variable, using "object destructuring" syntax
const { piece } = models

//Notice the word async before the callback function of each route, this allows us to use the await keyword inside of the function for async calls. 
//await pauses the execution of the function and waits for the result to come back. Once the result has come back, it assigns 
//the result object to the variable where the await was called. Then it continues on with the rest of the function.

// creates on "piece", uses async/await syntax for the sequelize query. Returns result to front end as json
app.post("/api/piece", async function(req,res,next){
    
    const { title, description, category, img_url, availability, price } = req.body
    var result = await piece.create({
        title, description, category, img_url, availability, price
    })

    var created = result.get({plain: true})
    return res.json({
        created: created
    })     

})

app.get("/api/piece/:id", async function(req,res,next){

    const { id } = req.params

    var queryResult = await piece.find({
        where: { id: id? id : null}
    }) 

    var pieceJson = queryResult.get({plain: true})

    return res.json({
        piece: pieceJson
    })

})

app.get("/api/pieces", async function(req,res,next){

    var pieces = await piece.findAll()

    var piecesArray = []
    pieces.forEach(function(thePiece){
        pieceJson = thePiece.get({plain: true})
        piecesArray.push(pieceJson)
    })


    return res.json({
        pieces: piecesArray
    })

})

app.put("/api/piece/:id", async function(req,res,next){

    var result = await piece.update( req.body , { where: { id: req.params.id }, fields: Object.keys(req.body), returning: true } )
   
    // gets the updated json record from the result 
    if(result && result.length && result[1]){

        var arrayOfUpdated = result[1]
        var theUpdated = arrayOfUpdated[0]
        var jsonOfUpdated = null

        if(theUpdated){
            jsonOfUpdated = theUpdated.get({plain: true})
        }
        if(jsonOfUpdated){

            // sends the newly updated object back to the front end
            return res.json({updated: jsonOfUpdated})
        }
    }
    

})

app.delete("/api/piece/:id", async function(req,res,next){

    var numberOfDestroyed = await piece.destroy({where:{id: req.params.id}})

    if(numberOfDestroyed == 1) {
        return res.json({removed:true})
    }
    else {
        return res.json({removed:false})
    }

})

// for production
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// listens on specified port
app.listen(port, () => console.log(`Listening on port ${port}`));