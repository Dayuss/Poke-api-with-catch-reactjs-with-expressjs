function randomWithProbability() {
    const probabilityNumber = [0,1];
    const idx = Math.floor(Math.random() * probabilityNumber.length);
    return probabilityNumber[idx];
}

module.exports = randomWithProbability;
