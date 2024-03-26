import taskModel from "../models/taskModel.js";

class tasksController {

  static async getAll(req, res) {

    // A função "find" do mongoose, aguarda como parametro um objeto contento chave valor das propriedades a se buscar
    // Ou seja, ele busca os objetos que contenham a chave e o valor passado.
    // Ex: await taskModel.find({"_id": "65f600092b6eff8956aaabdb"});

    try {

      const listaTasks = await taskModel.find({});
      res.status(200).json(listaTasks);

    } catch (error) {

      const err = error

      res.status(500).json(err);
      console.log('Erro encontrado: ', err);

    }
  }

  static async getTask(req, res) {

    const id = req.params.id;

    try {
      const task = await taskModel.findById(id);
      res.status(200).json(task);

    } catch (error) {

      const err = error

      res.status(500).json(err);
      console.log('Erro encontrado: ', err);
    }
  }

  static async registerTask(req, res) {

    const task = req.body;

    try {
      const taskRegistered = await taskModel.create(task);
      res.status(201).json(taskRegistered);

    } catch (error) {

      const err = error

      res.status(500).json(err);
      console.log('Erro encontrado: ', err);
    }
  }

  static async alterTask(req, res) {

    const id = req.params.id;
    const body = await req.body;

      try {

        await taskModel.findByIdAndUpdate(id, body);
        res.status(200).send({ message: "Atualização bem sucedida" });
        console.log("A tarefa foi editada");

      } catch (error) {

        const err = error

        res.status(500).json(err);
        console.log('Erro encontrado: ', err);
      }

    }

  static async deleteTask(req, res) {

    const id = req.params.id;

    try {
      const task = await taskModel.findByIdAndDelete(id);
      res.status(200).json({ message: "A tarefa foi excluída" });
      console.log("A tarefa foi excluída");

    } catch (error) {

      const err = error

      res.status(500).json(err);
      console.log('Erro encontrado: ', err);
    }
  }

}

export default tasksController;