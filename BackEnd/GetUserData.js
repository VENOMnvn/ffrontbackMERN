const {MongoClient} = require('mongodb');
const url = `mongodb+srv://venomnvn:Naveen1402%23%24@cluster0.x3huli5.mongodb.net/?retryWrites=true&w=majority`;
const Client = new MongoClient(url);
const fs = require('fs');
const DataBase = 'Naveen';

async function getDataUser()
{
    let result = await Client.connect();
    let db = result.db(DataBase);
    let collection =await db.collection('Users');
    return collection;
}

module.exports =  getDataUser;