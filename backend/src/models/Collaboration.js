// shopshare-backend/src/models/Collaboration.js
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  const Collaboration = sequelize.define('collaboration', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    list_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    tableName: 'collaboration',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['list_id', 'user_id']
      }
    ]
  });

  return Collaboration;
};