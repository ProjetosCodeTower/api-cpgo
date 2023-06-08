const express = require("express")

const AlunoController = require("../controllers/Aluno.controller")

const router = express.Router()


router.post("/api/v1/alunos/create", AlunoController.create)

router.get("/api/v1/alunos/read", AlunoController.readAll)

router.get("/api/v1/alunos/read/:matricula", AlunoController.readId)

router.put("/api/v1/alunos/update/:matricula", AlunoController.update)

router.delete("/api/v1/alunos/delete/:matricula", AlunoController.destroy)

module.exports = router