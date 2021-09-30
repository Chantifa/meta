const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Hello from backend!");
});

app.listen(PORT, () => {
    console.log(`backend runs on port ${PORT}`);
});