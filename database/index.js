const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Mikl3124:Mickael31!@cluster0-rnoqc.mongodb.net/twitter?retryWrites=true&w=majority')
    .then( () => console.log('connexion db ok !'))
    .catch( err => console.log( err ));