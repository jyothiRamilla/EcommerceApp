const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Cart = new Schema({
   cid: {
      type: String
   },
   cprice: {
      type: Number
   },
   cname:{
      type:String
   },
   curl: {
      type: String
   }
}, {
   collection: 'cart'
})

module.exports = mongoose.model('Cart', Cart)