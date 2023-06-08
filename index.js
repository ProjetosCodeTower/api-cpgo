const Express = require('express')
const bodyParser = require("body-parser")

const AlunosRoutes = require("./routes/Aluno.routes")

const app = Express()

const port = 3000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.get("/", (req, res) => {
    res.json({
        msg: "Ola mundo!!"
    })
})

app.use(AlunosRoutes)

app.listen(port, () => {
    console.log(`Server aberto na porta ${port}`)
})