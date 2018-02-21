const host = 'localhost';
module.exports = {
  port: process.env.port || process.env.PORT || '3000',
  mongoUrl: process.env.MONGODB_URI || 'mongodb://Sergii5854:nafalin132435@ds127888.mlab.com:27888/todo-list-js7'
};
