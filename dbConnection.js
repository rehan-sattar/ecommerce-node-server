const mongoose = require('mongoose');

const connectToDb = async () => {
  return mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      if (err) {
        return Promise.reject({ err, message: 'ERROR WHILE CONNECTING TO DB' });
      }
      return Promise.resolve();
    }
  );
};

module.exports = {
  connectToDb
};
