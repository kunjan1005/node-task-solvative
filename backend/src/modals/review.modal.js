const { Sequelize, Op, Model, DataTypes } = require("sequelize");
//import database instance for create modal
const { database } = require('../database/connection');
const { MODAL_NAME, MODAL_STATUS } = require("../global/constant");


//define modal
module.exports.Review=database.define(MODAL_NAME.review, {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false

    },
    is_active: {
        type: DataTypes.SMALLINT,
        defaultValue: MODAL_STATUS.ACTIVE
    },
})
 database.sync();
