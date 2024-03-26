import express from "express";
import dbConnect from "./options/dbConnect.js"
import router from "./routes/tasksRoute.js";

const conexao = await dbConnect();

conexao.on("error", (err) => {

  console.error("Erro de conexão com o banco: ", err);
});

conexao.once("open", () => {

  console.log("Conexão com o banco bem sucedida")

});

const app = express();
app.use(express.json());
app.use(router);

export default app