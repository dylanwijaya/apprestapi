var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
})

conn.connect((err)=>{
    if(err) throw errr;
    console.log('Mysql terkoneksi')
})

module.exports = conn