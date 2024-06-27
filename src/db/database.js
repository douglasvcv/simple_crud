const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()


const sequelize = new Sequelize('okok', 'root', process.env.PASSWORD_DB, {
    dialect:'mysql',
    host: 'localhost'
})


module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}