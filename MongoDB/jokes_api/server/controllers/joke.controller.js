const Joke = require('../models/joke.model.js')

// all Jokes
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      res.json({ joke: allJokes })
    })
    .catch((err) => { res.json(err) })
}

// joke by id
module.exports.findOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneJoke => {
      res.json({ joke: oneJoke })
    })
    .catch((err) => {
      res.json(err)
    })
}

// create joke
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => {
      res.json({ joke: newJoke })
    })
    .catch((err) => {
      res.json(err)
    })
}

//update joke
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  )
    .then(updateJoke => {
      res.json({ joke: updateJoke })
    })
    .catch((err) => {
      res.json(err)
    })
}

//delete joke 
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => {
      res.json({ result: result })
    })
    .catch((err) => {
      res.json(err)
    })
}
