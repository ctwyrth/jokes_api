const { Joke } = require("./../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
   Joke.find()
      .then(jokes => res.json(jokes))
      .catch(err => res.json(err))
};

module.exports.findOneSingleJoke = (req, res) => {
   Joke.findOne({ _id: req.params.id })
      .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
      .catch(err => res.json(err))
};

module.exports.createNewJoke = (req, res) => {
   Joke.create(req.body)
      .then(newJoke => res.json({ joke: newJoke }))
      .catch(err => res.json(err))
};

module.exports.updateExistingJoke = (req, res) => {
   Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json(err))
};

module.exports.deleteAnExistingJoke = (req, res) => {
   Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json(err))
};

module.exports.exists = (req, res) => {
   Joke.exists({name: req.body.name})
      .then(jokeExists => {
      if (jokeExists) {
         // Promise.reject() will activate the .catch() below.
         return Promise.reject('This joke is already in the DB.');
      }
      return Joke.create(req.body);
   })
   .then(saveResult => res.json(saveResult))
   .catch(err => res.json(err))
}