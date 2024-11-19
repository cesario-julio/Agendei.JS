import sqlite3 from 'sqlite3';

const SQLite3 = sqlite3.verbose();

function query(comand, params, method = 'all') {
    return new Promise( function (resolve, reject) {
        db[method](comand, params, function (error, result) {
            if (error)
                reject(error)
            else
                resolve(result)
        });
    });
}

const db = new SQLite3.Database('./src/database/banco.db', SQLite3.OPEN_READWRITE, (err) => {
    if (err)
        return console.log('Erro ao conectar ao banco: ' + err.message);
        
});
export { db, query };