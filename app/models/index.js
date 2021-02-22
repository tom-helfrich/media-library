const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const startSequelize = async () => {
  const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,

      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
      },
    }
  );

  require('./books.model.js')(sequelize);

  return sequelize;
};

module.exports = startSequelize;
