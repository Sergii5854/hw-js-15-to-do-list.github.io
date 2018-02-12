const host = 'localhost'
// backend
var dbuser = 'Sergii5854';
var dbpassword = 'nafalin132435';
var dbURL = `mongodb://${dbuser}:${dbpassword}@ds127888.mlab.com:27888/todo-list-js7`;


// frontend
const APIKEY= '?apiKey=ub5BFaJp0V2ASPxrYFiNY-ACVx-EEtAG';
const DBURL_todo = `https://api.mlab.com/api/1/databases/todo-list-js7/collections/todo${APIKEY}`;
const DBURL_completed = `https://api.mlab.com/api/1/databases/todo-list-js7/collections/completed${APIKEY}`;


module.exports = {
  port: process.env.port || process.env.PORT || '3000',
  mongoUrl: process.env.MONGODB_URI || dbURL
};
