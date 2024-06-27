const db = require('./database')


const User = db.sequelize.define('lista', {
    titulo:{
        type:db.Sequelize.STRING
    },
    
})