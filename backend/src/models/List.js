// shopshare-backend/src/models/List.js
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  const List = sequelize.define('list', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    display_icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'list',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true
  });

  return List;
};