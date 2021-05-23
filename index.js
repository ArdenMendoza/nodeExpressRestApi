const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); // use json middleware to enable rest app to accept json as req body format

app.listen(PORT, () => console.log(`it's alive on http://localhost:8080`));

app.get('/tshirt/', (req, res) => {
    res.status(200).send({
        tshirt: 'shirt',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    !logo ?
        res.status(418).send({ message: 'We need a logo!' }) :
        res.send({ tshirt: `shirt with your ${logo} and ID of ${id}` });
});