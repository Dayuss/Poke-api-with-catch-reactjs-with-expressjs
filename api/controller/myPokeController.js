const route = require('express').Router();
const myPokeService = require('../services/myPokeService');

route.get('/', 
    async (req, res, next) => {
    try{
        if (req.query.sessId === undefined) throw new Error("Sess id must be provided.")
        let data = await myPokeService.getList(req.query.sessId);
        return res.status(200).json({
            status: 0,
            message: 'Success!',
            data: data
        });
    }catch(e){
        next(e)
    }
});

route.post('/', 
    async (req, res, next) => {
    try{
        let data = await myPokeService.insertFavPoke(req.body)
        return res.status(200).json({
            status: 0,
            message: "Pokemon added to your list!",
            data: data
        });
    }catch(e){
        next(e)
    }
});

route.delete('/release/:id', 
    async (req, res, next) => {
    try{
        await myPokeService.releasePokemon(req.params.id)
        return res.status(200).json({
            status: 0,
            message: "Success release the pokemon!",
            data: []
        });
    }catch(e){
        next(e)
    }
});
module.exports = route;
