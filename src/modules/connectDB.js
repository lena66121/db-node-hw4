const mongoose = require('mongoose');

const connectToDB = (dbUrl) => {
  mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log('Database connection successful')
    })
    .catch(err => {
      console.error('Database connection error')
    })
};

module.exports = connectToDB;