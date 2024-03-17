module.exports = {
  HOST: "localhost",
  USER: "dinaka",
  PASSWORD: "1234",
  DB: "frond",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


