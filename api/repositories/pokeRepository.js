const httpReq = require("../helper/httpReq")

const getList = async (limit=10, offset=0) => {
    return httpReq(`/pokemon?limit=${limit}&offset=${offset}`)
        .then(function (response) {
            // handle success
            return response.data.results
        })
        .catch(function (error) {
            throw error;
        })
}

const getDetail = async(pokeId) => {
    return httpReq(`/pokemon/${pokeId}`)
        .then(function (response) {
            return (response.data)
        })
        .catch(function (error) {
            throw error;
        })
        
}

module.exports = {
    getList,
    getDetail
}