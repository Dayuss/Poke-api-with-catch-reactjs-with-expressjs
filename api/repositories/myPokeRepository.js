const {
    MyPoke
} = require('../models');


const create = async(data, t) => {
    return MyPoke.create(data,{transaction: t}).catch((error) => { throw new Error(error) })
}

const count = async (whr) => {
    return MyPoke.count({
        where: whr,
        distinct: 'myPokeId'
    });
}

const detail = async(whr) => {
	return MyPoke.findOne({
		where : whr
	});
}

const listAll = (whr = null) => {
    return MyPoke.findAll({
        where: whr,
        order:[ 
            ['createdAt','DESC']
        ],
    })
}

const update = async(id, data, t) => {
    return MyPoke.update(data, 
    {
        where: {myPokeId: id},
        transaction: t,
        returning: true,
        plain: true
    })
    .catch((error) => { throw new Error(error) })
    .then(data => {
        return data[1] 
    })
}


const destroy = async(id, t) => {
    return MyPoke.destroy({
        where: {myPokeId: id},
        transaction: t,
        returning: true,
        plain: true
    })
    .catch((error) => { throw new Error(error) })
    .then(data => {
        return data[1] 
    })
}


module.exports = {
    create,
    detail,
    update,
    listAll,
    destroy,
    count
}