const db = require('./db.json');
let houseid = 4;

const getHouses = (req,res) => {
    res.status(200).send(db);
}

const deleteHouse = (req,res) => {
    let index = db.findIndex(elem => elem.id === +req.params.id);
    db.splice(index, 1);
    res.status(200).send(db);
}

const createHouse = (req,res) => {
    const houseObj = {
        id: houseid,
        address: req.body.address,
        price: req.body.price,
        imageURL: req.body.imageURL
    };

    db.push(houseObj);
    
    houseid += 1;
    
    res.status(200).send(db);
}

const updateHouse = (req,res) => {
    let index = db.findIndex(elem => elem.id === +req.params.id);
    
    if (req.body.type === 'plus') {
        db[index].price = Number(db[index].price) + 10000;
    } else {
        db[index].price = Number(db[index].price) - 10000;
    }
    
    res.status(200).send(db);
}

module.exports = {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse
}