const Node = require('./node');

new Node({
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 53645
});
