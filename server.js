const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Permite requisições de qualquer origem (útil para desenvolvimento)
app.use(bodyParser.json()); // Parseia requisições JSON

// Rota básica
app.get('/', (req, res) => {
    res.send('Bem-vindo à API da Plataforma de Ingressos!');
});

// Iniciar o servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
