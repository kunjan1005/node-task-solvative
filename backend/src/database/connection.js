const { Sequelize } = require('sequelize');
//database configuration
const database = process.env.DB_NAME || ""
const db_user = process.env.DB_USER || ""
const db_pass = process.env.DB_PASS || ""
//create sequilize instance
const sequelize = new Sequelize(database, db_user, db_pass, {
    host: process.env.DB_HOST || "",
    dialect: 'postgres',
});
//check database connected or not
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

