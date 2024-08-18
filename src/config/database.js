const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.URI);

(
    async () => {
        try {
            await sequelize.authenticate();
            console.log('Conexão com o banco bem sucedida!')
        } catch (error) {
            console.log('Erro de conexão com o banco:', error);
        }
    }
)();

module.exports = { sequelize }