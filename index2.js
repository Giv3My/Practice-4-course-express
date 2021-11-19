const express = require('express');
const app = express();

const users = [
    {
        name: "Bessmertnykh",
        age: "18",
    },
    {
        name: "Skorin",
        age: "19",
    },
];

app.get('/', (req, res) => {
    res.json(users);
})

app.listen(3000);
