'use strict'

const { bookshelf } = require('../db/database');
const Artist = require('../models/artist')

module.exports.getArtist = (req, res, next) => {
  Artist.getAll()
  .then( (artistData) => {
    res.status(200).json(artistData);
  })
  .catch( (error) => {
    next(error)
  })
}
