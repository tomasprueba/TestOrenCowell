const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Tomas123",
  database: "api",
  port: '5432',
});

module.exports = pool;
