const pokeRepository = require("../repositories/pokeRepository")
const randInt = require("../helper/randomWithProbability")
const myPokeRepo = require("../repositories/myPokeRepository");


const getList = async (sessId, limit = 10, offset = 0) => {
    try {
        const pokemon = await pokeRepository.getList(limit, offset);
        const resp = [];
        for(let poke of pokemon){
            const id = poke.url.split('/').slice(-2)[0]; 
            const count = await myPokeRepo.count({sessId, pokeId:id});
            resp.push({
                id,
                captured: count,
                name: poke.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            })
        }
        return resp;
    } catch (error) {
        throw error;
    }
    
}

const getDetail = async(pokeId) => {
    return pokeRepository.getDetail(pokeId)
        
}

const catchPoke = async(pokeId) => {
    try {
        const isCaught = randInt();
        if(isCaught===1){
            return {
                data:{pokeId},
                msg: "You catch the pokemon!"
            };
        }else{
            throw new Error("The Pokemon Broke Free!");
        }
    } catch (error) {
        throw error;
    }
}



module.exports = {
    getList,
    catchPoke,
    getDetail,
}