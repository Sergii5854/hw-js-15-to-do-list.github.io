const host = 'localhost';
// backend
var dbuser = 'Sergii5854';
var dbpassword = 'nafalin132435';
var dbURL = 'mongodb://'+dbuser+':'+dbpassword+'@ds127888.mlab.com:27888/todo-list-js7';

module.exports = {
  port: process.env.port || process.env.PORT || '3000',
  mongoUrl: process.env.MONGODB_URI || dbURL
};
