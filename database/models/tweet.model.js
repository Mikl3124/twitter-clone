const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: { 
        type: String,
        maxlength: [140, 'Trop long'],
        minlength: [1, 'Trop court'],
        required: [true, 'Champ requis']
    },
    author: { type: schema.Types.ObjectId, ref: 'user', required: true}
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;