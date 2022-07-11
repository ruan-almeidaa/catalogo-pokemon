const express = require("express");
const router = express.Router();

const pokeApi = require("../config/pokeApi");

router.get("/pokemons/:pagina", async (req, res) => {

    let pagina = parseInt(req.params.pagina);
    let idInicial = 0;
    let arrPokemons =[];
    var contadorDePokemons = 0;

    if(isNaN(pagina) || pagina == 1){
        idInicial = 1;
    }else{
        idInicial = pagina*15+1;
    }
    
for(contadorDePokemons; contadorDePokemons<15; contadorDePokemons++, idInicial++){
    try{
        const {data} = await pokeApi.get(`pokemon/${idInicial}`);
        //
        arrPokemons.push(data);
        
    } catch(error){
        console.log(error);
    }

}
res.render("listaDePokemons", {pokemons: arrPokemons, pagina: pagina});
});

router.post("/buscar", async (req,res) =>{

    const nomePokemon = req.body.nomePokemon;

    try{
        const {data} = await pokeApi.get(`pokemon/${nomePokemon}`);
        res.render("pokemon", {pokemon: data});
        
    } catch(error){
        console.log(error);
    }
});


module.exports = router;