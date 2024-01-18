const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const authRoute = require("./router/auth");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({  extended: true}));

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Quiz ExpressJS API by Lintang');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use(authRoute);


const db = require('./models')
db.sequelize.sync()

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));