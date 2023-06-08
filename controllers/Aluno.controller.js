const Aluno = require("../models/Alunos.model")

const create = async (req, res) => {
    try {
        const {nome, matricula, nota} = req.body
        const aluno = await Aluno.create({
            nome, matricula, nota
        })
        res.status(200).json(aluno)
    }catch (e) {
        res.status(400).json(e)
    }
}

const readAll = async (req, res) => {

    try {
        const alunos = await Aluno.findAll()
        res.status(200).json(alunos)

    }catch (e) {
        res.status(400).json(e)
    }
}

const readId = async (req, res) => {
    const {matricula} = req.params

    try {
        const aluno  = await Aluno.findByPk(matricula)

        if(aluno) {
            res.status(200).json(aluno)
        }else {
            res.status(404)
        }
    }catch (e) {
        res.status(400).json(e)
    }
}

const update = async (req, res) => {
    const {matricula} = req.params
    const {nome, nota } = req.body

    try {
       const aluno = await  Aluno.findByPk(matricula)

        if (aluno) {
            aluno.set({
                nome, nota
            })
            await aluno.save()
            res.status(200).json(aluno)
        }else {
            res.status(404)
        }
    }catch (e) {
        res.status(400).json(e)
    }
}

const destroy = async (req, res) => {
    const {matricula} = req.params

    try {
        const aluno = await Aluno.findByPk(matricula)

        if(aluno){
            await aluno.destroy()
            res.status(200).json({
                msg:"Aluno apagado"
            })
        }else {
            res.status(404)
        }
    }catch (e) {
        res.status(400).json(e)
    }
}

module.exports = {
    create,
    readAll,
    readId,
    update,
    destroy
}