// shopshare-backend/src/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    dialect: 'postgres', // Specify the database dialect
    logging: false, // Set to true to see SQL queries in development
    // Define a function to automatically load models later
    // pool: { // Optional: connection pooling settings
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
  }
);

// This object will be used to hold our models later
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import and initialize models
db.User = require('../models/User')(sequelize);
db.List = require('../models/List')(sequelize);
db.ListItem = require('../models/ListItem')(sequelize);
db.Collaboration = require('../models/Collaboration')(sequelize);

// Define associations
// User has many Lists (as owner)
db.User.hasMany(db.List, { 
  foreignKey: 'owner_id',
  as: 'ownedLists'
});
db.List.belongsTo(db.User, { 
  foreignKey: 'owner_id',
  as: 'owner'
});

// List has many ListItems
db.List.hasMany(db.ListItem, { 
  foreignKey: 'list_id',
  as: 'items'
});
db.ListItem.belongsTo(db.List, { 
  foreignKey: 'list_id',
  as: 'list'
});

// User has many ListItems (as added_by_user)
db.User.hasMany(db.ListItem, { 
  foreignKey: 'added_by_user_id',
  as: 'addedItems'
});
db.ListItem.belongsTo(db.User, { 
  foreignKey: 'added_by_user_id',
  as: 'addedByUser'
});

// User has many ListItems (as checked_by_user)
db.User.hasMany(db.ListItem, { 
  foreignKey: 'checked_by_user_id',
  as: 'checkedItems'
});
db.ListItem.belongsTo(db.User, { 
  foreignKey: 'checked_by_user_id',
  as: 'checkedByUser'
});

// Many-to-Many: Users and Lists through Collaborations
db.User.belongsToMany(db.List, { 
  through: db.Collaboration,
  foreignKey: 'user_id',
  otherKey: 'list_id',
  as: 'collaboratedLists'
});
db.List.belongsToMany(db.User, { 
  through: db.Collaboration,
  foreignKey: 'list_id',
  otherKey: 'user_id',
  as: 'collaborators'
});

// Direct associations for Collaboration
db.List.hasMany(db.Collaboration, { 
  foreignKey: 'list_id',
  as: 'collaborations'
});
db.Collaboration.belongsTo(db.List, { 
  foreignKey: 'list_id',
  as: 'list'
});

db.User.hasMany(db.Collaboration, { 
  foreignKey: 'user_id',
  as: 'collaborations'
});
db.Collaboration.belongsTo(db.User, { 
  foreignKey: 'user_id',
  as: 'user'
});

module.exports = db;