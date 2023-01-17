const api = require("./api");

const express = require("express");

const server = express();

server.use(express.json());

server.listen(8001);

server.get('/', (req, res) => {
    return res.send({ message: "Matheus" })
});

server.get('/pokemon', async (req, res) => {
    try {
        const { data } = await api.get("pokemon/3");

        return res.send({ name: data.name });
    } catch (error) {
        res.send({ error: error.message });
    }
})