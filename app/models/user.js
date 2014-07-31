// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local : {
        name : String,
        email : String,
        password : String,
    },
    facebook : {
        id : String,
        token : String,
        email : String,
        name : String
    },
    twitter : {
        id : String,
        token : String,
        displayName : String,
        username : String
    },
    google : {
        id : String,
        token : String,
        email : String,
        name : String
    }

});

// methods ======================

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
User = mongoose.model('User', userSchema);

/**
 * Find user by id and store it in the request
 */
exports.user = function(req, res, next, id) {
  User.findById(id, function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('Failed to load user' + id));
    req.user = user;
    next();
  });
};