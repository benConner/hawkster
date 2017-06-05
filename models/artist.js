'use strict'

const { bookshelf } = require('../db/database');

require('./artist')

const Artist = bookshelf.Model.extend({
  tableName: 'artist',
  artist: function() {return this.belongsToMany('Artist').through('Artist_Piv')}

},{
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  }
})

module.exports = bookshelf.model('Artist', Artist);
