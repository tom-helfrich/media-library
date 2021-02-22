module.exports = {
  HOST: 'rds-mysql-sandbox.cqhi1sh5eo8o.us-east-2.rds.amazonaws.com',
  USER: 'admin',
  PASSWORD: 'Kobefan1984!',
  DB: 'media_library',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
