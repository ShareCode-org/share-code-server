const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    createdBy: {type: Map, of: String, required: true}
});

module.exports = mongoose.model('Post', postSchema);

