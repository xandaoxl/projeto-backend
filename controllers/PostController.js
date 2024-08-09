const PostModel = require("../models/PostModel");

class PostController {

    async findAll(request, response) {
        const dados = await PostModel.findAll();
        return response.status(200).json(dados);
    }

    async findId(request, response) {
        const id = request.params.id;
        const dados = await PostModel.findByPk(id);
        return response.status(200).json(dados);
    }

    async create(request, response) {
        const dados = request.body;
        const retorno = await PostModel.create(dados);
        return response.json({
            message: 'Post criado com sucesso!',
            data: retorno
        });
    }

    async update(request, response) {
        const id = request.params.id;
        const dados = request.body;
        
        const retorno = PostModel.update(dados, { where: { id: id } });
        return response.json({
            message: 'Post atualizado com sucesso!',
            data: retorno
        });
    }

    async delete(request, response) {
        const id = request.params.id;
        await PostModel.destroy({ where: { id: id} });
        return response.json({
            message: 'Post removido com sucesso!'
        });
    }
    
}

module.exports = PostController;