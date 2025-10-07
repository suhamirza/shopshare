// shopshare-backend/src/models/ListItem.js
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  const ListItem = sequelize.define('listItem', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    list_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING(50),
      defaultValue: 'medium',
      allowNull: false
    },
    checked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    added_by_user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    checked_by_user_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    timestamp_added: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    timestamp_checked: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_index: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'listItem',
    timestamps: false,
    underscored: true
  });

  return ListItem;
};