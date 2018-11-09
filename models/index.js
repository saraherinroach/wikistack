const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlphanumeric: true,
      notContains: ' ',
    },
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      defaultValue: true,
      // ???????
    },
  },
  // if we can use true / false to mean open / closed ?????
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
});

module.exports = {
  db,
};
