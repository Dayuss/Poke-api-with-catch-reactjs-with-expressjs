const myPokeRepo = require("../repositories/myPokeRepository")
const {sequelize} = require('../models');
const moment = require("moment");
const fibonacci = require("../helper/fibonacciSeq");

const getList = async (sessId) => {
    return myPokeRepo.listAll({sessId});
}

const insertFavPoke = async (inputValues)=>{
    const transaction = await sequelize.transaction();
    try {
        const count = await myPokeRepo.count({sessId: inputValues.sessId,pokeId: inputValues.pokeId});

        const insert = await myPokeRepo.create({
            pokeId: inputValues.pokeId,
            sessId: inputValues.sessId,
            nickname: inputValues.nickname +'-'+ fibonacci(count),
            picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${inputValues.pokeId}.png`,
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
        }, transaction)
        await transaction.commit();
        return insert;
    } catch (error) {
        await transaction.rollback();
        throw error;
        
    }
}

const releasePokemon = async (myPokeId) => {
    const transaction = await sequelize.transaction();
    try {
        const destroy = await myPokeRepo.destroy(myPokeId, transaction)
        await transaction.commit();
        return destroy;
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}

module.exports={
    getList,
    insertFavPoke,
    releasePokemon
}