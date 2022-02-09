//importar a configuração dos servidor
var servidor = require("./config/servidor")

//carregar a vaariavel app do servidor
var app = servidor.app

//carreagar a variavel porta do servidor
var porta = servidor.porta

//criar a rota para a requisição /
app.get("/",(req,res)=>{
    res.send("O servidor está funcionando")
})

//ligar o servidor 
app.listen(porta,()=>{
    console.log("servidor em http://localhost:"+porta)
})