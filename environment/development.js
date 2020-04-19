const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://Mikl3124:Mickael31!@cluster0-rnoqc.mongodb.net/twitter?retryWrites=true&w=majority',
  cert: path.join( __dirname, '../ssl/local.crt'),
  key: path.join( __dirname, '../ssl/local.key'),

}