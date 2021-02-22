const { Sequelize } = require('sequelize');
const { Sequelize } = require('sequelize');

moddule.exports = (sequelize) => {
  const options = {
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'modified_date',
    tableName: 'books',
  };

  const definition = {
    ['book_id']: {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    ['author_id']: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    ['category_id']: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    ['title']: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    ['isbn']: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    ['description']: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    ['language_id']: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    ['is_on_sale']: {
      allowNull: true,
      type: Sequelize.BOOLEAN,
    },
    ['created_date']: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    ['modified_date']: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  };

  return sequelize.define('books', definition, options);
};
