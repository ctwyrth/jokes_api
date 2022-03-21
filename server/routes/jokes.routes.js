const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
   app.get("/api", (req, res) => {
      res.send("Our express api server is now sending this over to the browser");
   });
   app.get("/api/jokes", JokesController.findAllJokes);
   app.get("/api/jokes/:id", JokesController.findOneSingleJoke);
   app.post("/api/jokes", JokesController.createNewJoke);
   app.put("/api/jokes/update/:id", JokesController.updateExistingJoke);
   app.get('/api/random/joke', JokesController.findRandomJoke);
   app.delete("/api/jokes/delete/:id", JokesController.deleteAnExistingJoke);
}