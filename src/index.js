require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('PARABÉNS ELINHAAAAAAA TU É BRABA, PORRA!!'); 
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));