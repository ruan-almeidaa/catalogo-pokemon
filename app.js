const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const pokemonController = require("./controllers/pokemonController");

//definindo EJS como minha view engine
app.set('view engine','ejs');

//definindo que arquivos estáticos ficarão na pasta public
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/",pokemonController);
app.listen(process.env.PORT || 8000);