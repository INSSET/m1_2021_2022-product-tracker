const { MongoClient } = require('mongodb')

let dbConnection

module.exports  =  {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://root:root@45.9.188.170:27017')
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}