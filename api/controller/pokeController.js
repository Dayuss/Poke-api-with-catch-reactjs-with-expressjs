const route = require('express').Router();
const pokeService = require('../services/pokeService');


route.get('/', 
    async (req, res, next) => {
    try{
        if (req.query.sessId === undefined) throw new Error("Sess id must be provided.")
        let data = await pokeService.getList(req.query.sessId, req.query.limit);
        return res.status(200).json({
            status: 0,
            message: 'Success!',
            data: data
        });
    }catch(e){
        next(e)
    }
});

route.get('/:id', 
    async (req, res, next) => {
    try{
        let data = await pokeService.getDetail(req.params.id);
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
        let data = await pokeService.catchPoke(req.body.pokeId);
        return res.status(200).json({
            status: 0,
            message: data.msg,
            data: data.data
        });
    }catch(e){
        next(e)
    }
});

module.exports = route;
