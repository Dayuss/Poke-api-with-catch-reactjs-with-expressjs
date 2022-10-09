'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('my_pokemon', {
      myPokeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'my_poke_id'
      },
      sessId: {
        type: Sequelize.STRING,
        field: 'sess_id'
      },
      pokeId: {
        type: Sequelize.INTEGER,
        field: 'poke_id'
      },
      nickname: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.STRING,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.STRING,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('my_pokemon');
  }
};